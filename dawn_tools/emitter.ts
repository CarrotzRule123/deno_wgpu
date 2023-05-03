import prettier from "https://esm.sh/prettier@2.8.8";
import parser from "https://esm.sh/prettier@2.8.8/parser-typescript";

// Fix differences between Dawn's and WebGPU's naming conventions
const Fixer: { [label: string]: string } = {
  "color write mask": "color write",
  "alpha mode": "canvas alpha mode",
};

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
};

type Value = {
  name: string;
  value: number;
  jsrepr?: string;
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
  Interface,
  Binding,
}

type Chunk = {
  name: string;
  type: ChunkType;
  chunks: string[];
};

class Emitter {
  chunks: Chunk[] = [];

  emitDefaults() {
    this.chunks.push({
      name: "GPUFlagsConstant",
      type: ChunkType.Type,
      chunks: ["export type GPUFlagsConstant = number;\n\n"],
    });
  }

  emitTree(ast: ASTTree) {
    this.emitDefaults();
    for (const label in ast) {
      this.emitNode(label, ast[label]);
    }
  }

  emitNode(label: string, node: ASTNode) {
    switch (node.category) {
      case ASTType.Bitmask:
        return this.emitBitmask(label, node);
      case ASTType.Enum:
        return this.emitEnum(label, node);
    }
  }

  emitBitmask(label: string, node: Bitmask) {
    this.emitBitmaskType(label);
    this.emitBitmaskInterface(label, node);
  }

  emitBitmaskType(label: string) {
    const chunks = [];
    const type = ChunkType.Type;
    const name = prefixGPU(pascalCase(label)) + "Flags";
    chunks.push(`export type ${name}=number;\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitBitmaskInterface(label: string, node: Bitmask) {
    const chunks = [];
    const type = ChunkType.Interface;
    const name = prefixGPU(pascalCase(label));
    chunks.push(`export interface ${name}{`);
    for (const value of node.values) {
      chunks.push(`readonly ${snakeCase(value.name)}:GPUFlagsConstant;`);
    }
    chunks.push(`};\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitEnum(label: string, node: Enum) {
    this.emitEnumType(label, node);
    this.emitEnumMap(label, node);
  }

  emitEnumType(label: string, node: Enum) {
    if (!node.emscripten_no_enum_table) {
      const chunks = [];
      const type = ChunkType.Type;
      const name = prefixGPU(pascalCase(label));
      chunks.push(`export type ${name}=`);
      for (const value of node.values) {
        if (value.valid !== false) {
          const member = value.jsrepr ? value.jsrepr.slice(1, -1) : value.name;
          chunks.push(`|"${enumCase(member)}"`);
        }
      }
      chunks.push(`;\n\n`);
      this.chunks.push({ name, type, chunks });
    }
  }

  emitEnumMap(label: string, node: Enum) {
    if (!node.emscripten_no_enum_table) {
      const chunks = [];
      const type = ChunkType.Type;
      const name = prefixGPU(pascalCase(label));
      chunks.push(`const ${name}={`);
      for (const value of node.values) {
        if (value.valid !== false) {
          const member = value.jsrepr ? value.jsrepr.slice(1, -1) : value.name;
          chunks.push(`"${enumCase(member)}": ${value.value},`);
        }
      }
      chunks.push(`};\n\n`);
      this.chunks.push({ name, type, chunks });
    }
  }
}

function prefixGPU(str: string) {
  return "GPU" + str;
}

function _prefixWgpu(str: string) {
  return "wgpu" + str;
}

function pascalCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
    return word.toUpperCase();
  }).replace(/\s+/g, "");
}

function _camelCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
}

function snakeCase(str: string) {
  return str.replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toUpperCase())
    .join("_");
}

function enumCase(str: string) {
  return str.split(" ").reduce((a, b) =>
    a + (isNaN(parseInt(a.at(-1)!)) ? "-" + b : b)
  ).toLowerCase();
}

async function run() {
  let json = await (await fetch(import.meta.resolve("./dawn.json"))).text();

  for (const label in Fixer) {
    json = json.replaceAll(label, Fixer[label]);
  }

  const emitter = new Emitter();

  emitter.emitTree(JSON.parse(json));

  const prefix = `// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"\n\n`;

  let string = prefix + emitter.chunks.map((c) => c.chunks).flat().join("");

  string = prettier.format(string, {
    plugins: [parser],
    parser: "typescript",
    quoteProps: "preserve",
  });

  Deno.writeFileSync("src/webgpu.ts", new TextEncoder().encode(string));
}

await run();
