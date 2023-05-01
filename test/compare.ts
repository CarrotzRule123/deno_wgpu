import { parse } from "https://deno.land/x/swc@0.2.1/mod.ts";

async function parseFile(name: string) {
  const file = await (await fetch(import.meta.resolve(name))).text();

  const ast = parse(file, {
    target: "es2019",
    syntax: "typescript",
    comments: false,
  });

  const keys = [];

  for (const node of ast.body) {
    switch (node.type) {
      case "TsTypeAliasDeclaration":
        keys.push(node.id.value);
        break;
      case "TsInterfaceDeclaration":
        keys.push(node.id.value);
        break;
      case "VariableDeclaration":
        if (node.declarations[0].id.type == "Identifier") {
          keys.push(node.declarations[0].id.value);
        }
        break;
      case "ExportDeclaration":
        if (node.declaration.type == "TsEnumDeclaration") {
          keys.push(node.declaration.id.value);
        }
        if (node.declaration.type == "TsInterfaceDeclaration") {
          keys.push(node.declaration.id.value);
        }
        if (node.declaration.type == "TsTypeAliasDeclaration") {
          keys.push(node.declaration.id.value);
        }
        break;
    }
  }

  return keys;
}

const target = await parseFile("./index.d.ts");

const generated = await parseFile("../src/webgpu.ts");

const missing = [];

const extra = [];

for (const generatedKey of generated) {
  if (!target.includes(generatedKey)) {
    extra.push(generatedKey);
  }
}

for (const targetKey of target) {
  if (!generated.includes(targetKey)) {
    missing.push(targetKey);
  }
}

const stats = {
  Missing: missing,
  Extra: extra,
  TotalGenerated: generated.length,
  TotalMatched: target.length - missing.length,
  TotalMissing: missing.length,
  TotalExtra: extra.length,
  Total: target.length,
};

console.log(stats);

Deno.writeFileSync(
  "test/compare.json",
  new TextEncoder().encode(JSON.stringify(stats, null, 2)),
);
