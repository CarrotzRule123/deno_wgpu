import prettier from "https://esm.sh/prettier@2.8.8";
import parser from "https://esm.sh/prettier@2.8.8/parser-typescript";

// Fix differences between Dawn's and WebGPU's naming conventions
const Fixer: { [label: string]: string } = {
  "color write mask": "color write",
  "alpha mode": "canvas alpha mode",
  "programmable stage descriptor": "programmable stage",
  "extent 3D": "extent 3D strict",
};

const Internals = [
  "request adapter options",
  "device descriptor",
  "required limits",
  "supported limits",
  "limits",
  "request adapter status",
  "adapter type",
  "backend type",
  "buffer map async status",
  "compilation info request status",
  "create pipeline async status",
  "error type",
  "present mode",
  "queue work done status",
  "request device status",
  "s type",
  "adapter properties",
  "instance descriptor",
  "render pass descriptor max draw count",
  "primitive depth clip control",
  "shader module SPIRV descriptor",
  "shader module WGSL descriptor",
  "surface descriptor",
  "surface descriptor from canvas HTML selector",
  "surface descriptor from xcb window",
  "swap chain descriptor",
];

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

const Priority = {
  "bitmask": 0,
  "enum": 1,
  "structure": 2,
  "function pointer": 3,
  "object": 4,
  "typedef": 5,
  "constant": 5,
  "function": 5,
  "native": 5,
};

const TypeMap: { [type: string]: [string, string] } = {
  "bool": ["number", "u8"],
  "unsigned char": ["number", "u8"],
  "uint8_t": ["number", "u8"],

  "char": ["number", "i8"],
  "signed char": ["number", "i8"],
  "int8_t": ["number", "i8"],

  "unsigned short int": ["number", "u16"],
  "uint16_t": ["number", "u16"],

  "short int": ["number", "i16"],
  "int16_t": ["number", "i16"],

  "unsigned int": ["number", "u32"],
  "uint32_t": ["number", "u32"],

  "int": ["number", "i32"],
  "signed int": ["number", "i32"],
  "int32_t": ["number", "i32"],

  "unsigned long long int": ["number", "u64"],
  "uint64_t": ["number", "u64"],

  "long long int": ["number", "i64"],
  "int64_t": ["number", "i64"],

  "float": ["number", "f32"],
  "double": ["number", "f64"],

  "size_t": ["number", "usize"],
};

type Type = [string, string, string];

type Tagged = {
  tags?: string[];
};

type ASTTree = { [name: string]: ASTNode };

type ASTNode =
  & (
    | TypeDef
    | Enum
    | Bitmask
    | FunctionPointer
    | Structure
    | ObjectType
    | Constant
    | FunctionType
  )
  & Tagged;

type RecordMember = {
  name: string;
  type: string;
  annotation: string;
  length?: string;
  optional?: boolean;
  default?: number | string;
  wire_is_data_only?: boolean;
} & Tagged;

type Value = {
  name: string;
  value: number;
  jsrepr?: string;
  valid?: boolean;

  meta_undefined: number;
} & Tagged;

type Method = {
  name: string;
  returns: string;
  args: RecordMember[];
} & Tagged;

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

  meta_id: number;
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
  Export,
  Internal,
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
    let priority = 0;
    function sort(node: ASTNode, label: string) {
      if (node.category == ASTType.Structure) {
        if (!node.meta_id) {
          node.meta_id = priority;
          for (const member of node.members) {
            if (ast[member.type]) {
              sort(ast[member.type], label);
            }
          }
          node.meta_id = priority++;
        }
      }
    }
    for (const label in ast) {
      sort(ast[label], label);
    }
    const sorted = Object.entries(ast).sort((node1, node2) => {
      return (Priority[node1[1].category]) - (Priority[node2[1].category]);
    }).sort((node1, node2) => {
      if (
        node1[1].category == ASTType.Structure &&
        node2[1].category == ASTType.Structure
      ) {
        return node1[1].meta_id - node2[1].meta_id;
      }
      return 0;
    });
    for (const [label, node] of sorted) {
      this.emitNode(label, node, ast);
    }
  }

  emitNode(label: string, node: ASTNode, ast: ASTTree) {
    if (excludeTag(node, "dawn") && excludeTag(node, "native")) {
      switch (node.category) {
        case ASTType.Bitmask:
          return this.emitBitmask(label, node);
        case ASTType.Enum:
          return this.emitEnum(label, node);
        case ASTType.Structure:
          return this.emitStruct(label, node, ast);
        case ASTType.Object:
          return this.emitObject(label, node, ast);
        case ASTType.Function:
          return this.emitFunction(label, node, ast);
      }
    }
  }

  emitBitmask(label: string, node: Bitmask) {
    this.emitBitmaskType(label);
    this.emitBitmaskInterface(label, node);
  }

  emitBitmaskType(label: string) {
    const chunks = [];
    const type = Internals.includes(label)
      ? ChunkType.Internal
      : ChunkType.Export;
    const name = prefixGPU(pascalCase(label)) + "Flags";
    chunks.push(`export type ${name}=number;\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitBitmaskInterface(label: string, node: Bitmask) {
    const chunks = [];
    const type = Internals.includes(label)
      ? ChunkType.Internal
      : ChunkType.Export;
    const name = prefixGPU(pascalCase(label));
    chunks.push(`export const ${name}={`);
    for (const value of node.values) {
      if (isValidBitflagValue(value)) {
        chunks.push(`${snakeCase(value.name)}:${value.value},`);
      }
    }
    chunks.push(`};\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitEnum(label: string, node: Enum) {
    this.emitEnumType(label, node);
    this.emitEnumMap(label, node);
  }

  emitEnumType(label: string, node: Enum) {
    const chunks = [];
    const type = Internals.includes(label)
      ? ChunkType.Internal
      : ChunkType.Export;
    const name = prefixGPU(pascalCase(label));
    chunks.push(`export type ${name}=`);
    for (const value of node.values) {
      if (isValidEnumValue(value)) {
        const member = value.jsrepr ? value.jsrepr.slice(1, -1) : value.name;
        chunks.push(`|"${enumCase(member)}"`);
      }
    }
    chunks.push(`;\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitEnumMap(label: string, node: Enum) {
    const chunks = [];
    const type = ChunkType.Internal;
    const name = prefixGPU(pascalCase(label));
    chunks.push(`export const ${name}={`);
    for (const value of node.values) {
      if (isValidEnumValue(value)) {
        const member = value.jsrepr ? value.jsrepr.slice(1, -1) : value.name;
        chunks.push(`"${enumCase(member)}": ${value.value},`);
      }
    }
    chunks.push(`};\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitStruct(label: string, node: Structure, ast: ASTTree) {
    this.emitStructType(label, node, ast);
    this.emitStructMap(label, node, ast);
  }

  emitStructType(label: string, node: Structure, ast: ASTTree) {
    const chunks = [];
    const type = Internals.includes(label)
      ? ChunkType.Internal
      : ChunkType.Export;
    const name = prefixGPU(pascalCase(label));
    chunks.push(`export interface ${name}{`);
    for (const member of node.members) {
      if (member.length) {
        const count = node.members.find((m) => m.name == member.length);
        if (count && count.default == 0) {
          member.optional = true;
        }
        node.members = node.members.filter((m) => m.name != member.length);
      }
    }
    for (const member of node.members) {
      if (excludeTag(member, "dawn")) {
        const jstype = getType(member, ast)[0];
        const optional = member.optional || (member.default != undefined) ? "?" : "";
        chunks.push(`${camelCase(member.name)}${optional}: ${jstype},`);
      }
    }
    chunks.push(`};\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitStructMap(label: string, node: Structure, ast: ASTTree) {
    const chunks = [];
    const type = ChunkType.Internal;
    const name = prefixGPU(pascalCase(label));
    const struct = node.extensible ? "extensible" : "struct";
    chunks.push(`export const ${name} = ${struct}({`);
    for (const member of node.members) {
      if (excludeTag(member, "dawn")) {
        const jstype = setOptional(member, ast);
        chunks.push(`${camelCase(member.name)}: ${jstype},`);
      }
    }
    chunks.push(`});\n\n`);
    this.chunks.push({ name, type, chunks });
  }

  emitObject(label: string, node: ObjectType, ast: ASTTree) {
    if (node.methods) {
      for (const method of node.methods) {
        if (excludeTag(method, "dawn")) {
          this.emitBindings(label, method, ast, true);
        }
      }
    }
  }

  emitFunction(label: string, node: FunctionType, ast: ASTTree) {
    this.emitBindings(
      "",
      {
        name: label,
        args: node.args,
        returns: node.returns,
      },
      ast,
      false,
    );
  }

  emitBindings(label: string, node: Method, ast: ASTTree, parent: boolean) {
    const chunks = [];
    const type = ChunkType.Binding;
    const name = prefixWgpu(pascalCase(label + " " + node.name));
    if (name == "wgpuDeviceGetSupportedSurfaceUsage") return;
    if (name == "wgpuGetProcAddress") return;
    chunks.push(`${name}:{parameters:[`);
    if (parent) chunks.push(`"pointer",`);
    if (node.args) {
      for (const member of node.args) {
        chunks.push(`"${getType(member, ast)[2]}",`);
      }
    }
    chunks.push(`],result:"${getReturnType(node.returns, ast)}"},`);
    this.chunks.push({ name, type, chunks });
  }
}

function setOptional(member: RecordMember, ast: ASTTree) {
  const type = getType(member, ast)[1];
  if (member.optional) return `option(${type}, null)`;
  if (member.optional && member.length == "strlen") {
    return `option(${type}, "")`;
  }
  if (member.default != undefined) {
    const value = member.default as string;
    if (!isNaN(value as unknown as number)) {
      if (type == "u64") {
        return `option(${type}, ${parseInt(value)}n)`;
      }
      return `option(${type}, ${parseInt(value)})`;
    }
    if (value == "NAN") return `option(${type}, NaN)`;
    if (value == "undefined") return `option(${type}, 0)`;
    if (value == "false") return `option(${type}, 0)`;
    if (value == "true") return `option(${type}, 1)`;
    if (value == "nullptr") return `option(${type}, null)`;
    if (value.length) {
      const node = ast[value.toLowerCase().replaceAll("_", " ").slice(5)];
      if (node && node.category == ASTType.Constant) {
        const map: { [type: string]: string } = {
          "size_t": "0xffffffffffffffffn",
          "uint32_t": "0xffffffff",
          "uint64_t": "0xffffffffffffffffn",
        };
        return `option(${type}, ${map[node.type]})`;
      }
      if (value.endsWith(".0f")) {
        return `option(${type}, ${value.slice(0, -3)})`;
      }
      const node2 = ast[member.type];
      if (node2.category == ASTType.Enum) {
        return `option(${type}, "${enumCase(value)}")`;
      }
      if (node2.category == ASTType.Bitmask) {
        const value = node2.values
          .find((x) => x.name == member.default)!
          .value;
        return `option(${type}, ${value})`;
      }
      return `option(${type}, "${member.default}")`;
    }
    return `option(${type}, ${member.default})`;
  }
  return type;
}

function getReturnType(type: string | undefined, ast: ASTTree) {
  if (type == "void" || !type) {
    return "void";
  }
  if (type == "void *" || type == "void const *") {
    return "pointer";
  }
  if (TypeMap[type]) {
    return TypeMap[type][1];
  }
  if (ast[type]) {
    if (ast[type].category == ASTType.Object) {
      return "pointer";
    }
    if (ast[type].category == ASTType.Bitmask) {
      return "u32";
    }
    if (ast[type].category == ASTType.Enum) {
      return "u32";
    }
  }
}

function getType(member: RecordMember, ast: ASTTree): Type {
  const name = prefixGPU(pascalCase(member.type));
  if (member.length == "strlen") {
    return ["string", "cstring", "pointer"];
  }

  if (member.annotation) {
    if (member.type == "void") {
      return ["unknown", "objptr", "pointer"];
    }
    if (member.length) {
      if (member.type == "uint32_t") {
        return [`Array<number>`, "arrayptr(u32)", "pointer"];
      }
      if (member.type == "uint8_t") {
        return [`BufferSource`, "arrayptr(u8)", "pointer"];
      }
      if (ast[member.type]) {
        if (ast[member.type].category == ASTType.Object) {
          return [`${name}[]`, `arrayptr(objptr)`, "pointer"];
        }
        if (ast[member.type].category == ASTType.Bitmask) {
          return [`${name}Flags[]`, `arrayptr(u32)`, "pointer"];
        }
        if (ast[member.type].category == ASTType.Enum) {
          return [`${name}[]`, `arrayptr(enumtype(${name}))`, "pointer"];
        }
        if (ast[member.type].category == ASTType.Structure) {
          return [`${name}[]`, `arrayptr(${name})`, "pointer"];
        }
      }
    } else {
      if (ast[member.type]) {
        return [`${name}`, `pointer(${name})`, "pointer"];
      }
    }
  } else {
    if (TypeMap[member.type]) {
      const [jstype, bytetype] = TypeMap[member.type];
      return [jstype, bytetype, bytetype];
    }
    if (ast[member.type]) {
      if (ast[member.type].category == ASTType.Object) {
        return [`${name}`, `objptr`, "pointer"];
      }
      if (ast[member.type].category == ASTType.Bitmask) {
        return [`${name}Flags`, `u32`, "u32"];
      }
      if (ast[member.type].category == ASTType.Enum) {
        return [`${name}`, `enumtype(${name})`, "u32"];
      }
      if (ast[member.type].category == ASTType.Structure) {
        return [`${name}`, `${name}`, "todo"];
      }
      if (ast[member.type].category == ASTType.FunctionPointer) {
        return [`${name}`, `${name}`, "function"];
      }
    }
  }

  return ["undefined", "undefined", "undefined"];
}

function excludeTag(tagged: Tagged, tag: string) {
  return tagged.tags ? !tagged.tags.includes(tag) : true;
}

function isValidBitflagValue(value: Value) {
  if (value.name == "none") {
    value.meta_undefined = value.value;
  }
  return value.valid !== false && value.name != "none" &&
    excludeTag(value, "dawn");
}

function isValidEnumValue(value: Value) {
  if (value.name == "undefined") {
    value.meta_undefined = value.value;
  }
  return value.valid !== false && value.jsrepr != "undefined" &&
    excludeTag(value, "dawn");
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
    json = json.replaceAll(`"${label}"`, `"${Fixer[label]}"`);
  }

  const emitter = new Emitter();

  emitter.emitTree(JSON.parse(json));

  const prefix = `// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"\n\n`;

  const imports1 =
    `import { GPUShaderModule, GPUPipelineLayout, GPUTextureView, GPUTexture, GPUBuffer } from "../webgpu.ts"\n\n`;

  const imports2 =
    `import { f32, f64, i32, u16, u32, u8 } from "../../deps.ts";
import { arrayptr, cstring, objptr, pointer, struct, extensible, option, enumtype, u64 } from "../util/mod.ts"\n\n`;

  const constant = `export const bindings = {`;

  const exports = emitter.chunks.filter((c) => c.type == ChunkType.Export);

  const internals = emitter.chunks.filter((c) => c.type == ChunkType.Internal);

  const bindings = emitter.chunks.filter((c) => c.type == ChunkType.Binding);

  function encode(chunks: Chunk[], prefix: string, suffix = "") {
    const string = prefix + chunks.map((c) => c.chunks).flat().join("") +
      suffix;

    const formatted = prettier.format(string, {
      plugins: [parser],
      parser: "typescript",
      quoteProps: "preserve",
    });

    return new TextEncoder().encode(formatted);
  }

  Deno.writeFileSync(
    "src/generated/webgpu.ts",
    encode(exports, prefix + imports1),
  );

  Deno.writeFileSync(
    "src/generated/internals.ts",
    encode(internals, prefix + imports2),
  );

  Deno.writeFileSync(
    "src/generated/bindings.ts",
    encode(bindings, prefix + constant, "}"),
  );
}

await run();
