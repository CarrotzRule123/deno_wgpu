// Do not modify this file!
// This file was generated automatically using "tools/builder.ts"

export enum GPUBufferUsage {
  None = 0,
  MapRead = 1,
  MapWrite = 2,
  CopySrc = 4,
  CopyDst = 8,
  Index = 16,
  Vertex = 32,
  Uniform = 64,
  Storage = 128,
  Indirect = 256,
  QueryResolve = 512,
}

export enum GPUColorWriteMask {
  None = 0,
  Red = 1,
  Green = 2,
  Blue = 4,
  Alpha = 8,
  All = 15,
}

export enum GPUMapMode {
  None = 0,
  Read = 1,
  Write = 2,
}

export enum GPUShaderStage {
  None = 0,
  Vertex = 1,
  Fragment = 2,
  Compute = 4,
}

export enum GPUTextureUsage {
  None = 0,
  CopySrc = 1,
  CopyDst = 2,
  TextureBinding = 4,
  StorageBinding = 8,
  RenderAttachment = 16,
  Present = 32,
  TransientAttachment = 64,
}
