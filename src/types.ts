import { u32 } from "../deps.ts";
import { GPUShaderModuleCompilationHint } from "./generated/internals.ts";
import {
  arrayptr,
  cstring,
  extensible,
  option,
  pointer,
  struct,
} from "./util/mod.ts";

export const GPUInstanceDescriptor = struct({
  searchpaths: arrayptr(cstring),
});

export const GPUShaderModuleWGSLDescriptor = extensible({
  stype: option(u32, 6),
  code: cstring,
});

export type GPUShaderModuleDescriptor = {
  chained: {
    code: string;
  };
  label?: string;
  hints?: GPUShaderModuleCompilationHint[];
};

export const GPUShaderModuleDescriptor = struct({
  chained: pointer(GPUShaderModuleWGSLDescriptor),
  label: option(cstring, ""),
  hints: option(arrayptr(GPUShaderModuleCompilationHint), []),
});
