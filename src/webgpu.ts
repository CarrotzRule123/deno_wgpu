// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"

export type GPUFlagsConstant = number;

export type GPUBufferUsageFlags = number;

export interface GPUBufferUsage {
  readonly NONE: GPUFlagsConstant;
  readonly MAP_READ: GPUFlagsConstant;
  readonly MAP_WRITE: GPUFlagsConstant;
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly INDEX: GPUFlagsConstant;
  readonly VERTEX: GPUFlagsConstant;
  readonly UNIFORM: GPUFlagsConstant;
  readonly STORAGE: GPUFlagsConstant;
  readonly INDIRECT: GPUFlagsConstant;
  readonly QUERY_RESOLVE: GPUFlagsConstant;
}

export type GPUColorWriteFlags = number;

export interface GPUColorWrite {
  readonly NONE: GPUFlagsConstant;
  readonly RED: GPUFlagsConstant;
  readonly GREEN: GPUFlagsConstant;
  readonly BLUE: GPUFlagsConstant;
  readonly ALPHA: GPUFlagsConstant;
  readonly ALL: GPUFlagsConstant;
}

export type GPUMapModeFlags = number;

export interface GPUMapMode {
  readonly NONE: GPUFlagsConstant;
  readonly READ: GPUFlagsConstant;
  readonly WRITE: GPUFlagsConstant;
}

export type GPUShaderStageFlags = number;

export interface GPUShaderStage {
  readonly NONE: GPUFlagsConstant;
  readonly VERTEX: GPUFlagsConstant;
  readonly FRAGMENT: GPUFlagsConstant;
  readonly COMPUTE: GPUFlagsConstant;
}

export type GPUTextureUsageFlags = number;

export interface GPUTextureUsage {
  readonly NONE: GPUFlagsConstant;
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly TEXTURE_BINDING: GPUFlagsConstant;
  readonly STORAGE_BINDING: GPUFlagsConstant;
  readonly RENDER_ATTACHMENT: GPUFlagsConstant;
  readonly PRESENT: GPUFlagsConstant;
  readonly TRANSIENT_ATTACHMENT: GPUFlagsConstant;
}
