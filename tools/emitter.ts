import prettier from "https://esm.sh/prettier@2.8.8";
import parser from "https://esm.sh/prettier@2.8.8/parser-typescript";

enum ASTType {
  TypeDef = "typedef",
  Enum = "enum",
  Bitmask = "bitmask",
  FunctionPointer = "function pointer",
  Structure = "structure",
  Object = "object",
  Constant = "constant",
  Function = "function",
}

type ASTTree = { [name: string]: ASTNode };

type ASTNode =
  | TypeDef
  | Enum
  | Bitmask
  | FunctionPointer
  | Structure
  | ObjectType
  | Constant
  | FunctionType;

type RecordMember = {
  name: string;
  type: string;
  annotation: string;
  length?: string;
  optional?: boolean;
  default?: number | string;
  wire_is_data_only?: boolean;

  jsType?: string;
  jsName?: string;
};

type Value = {
  name: string;
  value: number;
  jsrepr?: number;
  valid?: boolean;
};

type Method = {
  name: string;
  returns: string;
  args: RecordMember[];
};

type TypeDef = {
  category: ASTType.TypeDef;
  type: string;
};

type Enum = {
  category: ASTType.Enum;
  values: Value[];
  emscripten_no_enum_table?: boolean;
};

type Bitmask = {
  category: ASTType.Bitmask;
  values: Value[];
  emscripten_no_enum_table?: boolean;
};

type FunctionPointer = {
  category: ASTType.FunctionPointer;
  returns: string;
  args: RecordMember[];
};

type Structure = {
  category: ASTType.Structure;
  members: RecordMember[];
  extensible: boolean;
  chained: boolean;
};

type ObjectType = {
  category: ASTType.Object;
  methods: Method[];
};

type Constant = {
  category: ASTType.Constant;
  type: string;
  value: string;
};

type FunctionType = {
  category: ASTType.Function;
  returns: string;
  args: RecordMember[];
};

enum ChunkType {
  Type,
  Enum,
  Class,
  Binding,
}

type Chunk = {
  name: string;
  type: ChunkType;
  chunks: string[];
};

class Emitter {
  chunks: Chunk[] = [];

  emitTree(ast: ASTTree) {
    for (const label in ast) {
      this.emitNode(label, ast[label]);
    }
  }

  emitNode(label: string, node: ASTNode) {
    switch (node.category) {
      case ASTType.Bitmask:
        return this.emitBitmask(label, node);
    }
  }

  emitBitmask(label: string, node: Bitmask) {
    const chunks = [];
    const type = ChunkType.Enum;
    const name = prefixGPU(pascalCase(label));
    chunks.push(`export enum ${name}{`);
    for (const value of node.values) {
      chunks.push(`${pascalCase(value.name)}=${value.value},`);
    }
    chunks.push(`};\n\n`);
    this.chunks.push({ name, type, chunks });
  }
}

function prefixGPU(str: string) {
  return "GPU" + str;
}

function prefixWgpu(str: string) {
  return "wgpu" + str;
}

function pascalCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
    return word.toUpperCase();
  }).replace(/\s+/g, "");
}

function camelCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
}

async function run() {
  const ast = await (await fetch(import.meta.resolve("./dawn.json"))).json();

  const emitter = new Emitter();

  emitter.emitTree(ast);

  const prefix = `// Do not modify this file!
// This file was generated automatically using "tools/builder.ts"\n\n`;

  let string = prefix + emitter.chunks.map((c) => c.chunks).flat().join("");

  string = prettier.format(string, { plugins: [parser], parser: "typescript" });

  Deno.writeFileSync("src/webgpu.ts", new TextEncoder().encode(string));
}

await run();
