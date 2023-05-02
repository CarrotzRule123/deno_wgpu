import { parse } from "https://deno.land/x/swc@0.2.1/mod.ts";

async function parseFile(name) {
  const file = await (await fetch(import.meta.resolve(name))).text();

  return parse(file, {
    target: "es2019",
    syntax: "typescript",
    comments: false,
  });
}

const target = await parseFile("./index.d.ts");

const generated = await parseFile("../src/webgpu.ts");

const targetKeys = {};

const generatedKeys = {};

for (const node of target.body) {
  switch (node.type) {
    case "TsTypeAliasDeclaration":
      targetKeys[node.id.value] = node;
      break;
    case "TsInterfaceDeclaration":
      targetKeys[node.id.value] = node;
      break;
  }
}

for (const node of generated.body) {
  if (node.type == "ExportDeclaration") {
    switch (node.declaration.type) {
      case "TsTypeAliasDeclaration":
        generatedKeys[node.declaration.id.value] = node.declaration;
        break;
      case "TsInterfaceDeclaration":
        generatedKeys[node.declaration.id.value] = node.declaration;
        break;
    }
  }
}

const missing = [];

const extra = [];

const incorrect = [];

for (const key in generatedKeys) {
  if (!targetKeys[key]) {
    extra.push(key);
  }
}

for (const key in targetKeys) {
  if (!generatedKeys[key]) {
    missing.push(key);
  } else {
    const target = targetKeys[key];
    const generated = generatedKeys[key];
    if (target.type == "TsInterfaceDeclaration") {
      for (const node of target.body.body) {
        if (node.type == "TsPropertySignature") {
          if (!generated.body.body.find(n => n.key.value == node.key.value)) {
            if (!incorrect.includes(key)) {
              incorrect.push(key);
            }
          }
        }
      }
    }
    if (target.type == "TsTypeAliasDeclaration") {
      if (target.typeAnnotation.type == "TsUnionType") {
        for (const node of target.typeAnnotation.types) {
          if (!generated.typeAnnotation.types.find(n => n.literal.value == node.literal.value)) {
            if (!incorrect.includes(key)) {
              incorrect.push(key);
            }
          }
        }
      }
    }
  }
}

const stats = {
  Missing: missing,
  // Missing: missing.map(k => { return { [k]: targetKeys[k] } }),
  Extra: extra,
  Incorrect: incorrect,
  TotalGenerated: Object.keys(generatedKeys).length,
  TotalMatched: Object.keys(targetKeys).length - missing.length - incorrect.length,
  TotalMissing: missing.length,
  TotalExtra: extra.length,
  TotalIncorrect: incorrect.length,
  Total: Object.keys(targetKeys).length,
};

console.log(stats);

Deno.writeFileSync(
  "test/compare.json",
  new TextEncoder().encode(JSON.stringify(stats, null, 2)),
);
