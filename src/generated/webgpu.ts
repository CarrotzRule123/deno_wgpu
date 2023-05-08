// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"

import {
  GPUShaderModule,
  GPUPipelineLayout,
  GPUTextureView,
  GPUTexture,
  GPUBuffer,
} from "../webgpu.ts";

export type GPUBufferUsageFlags = number;

export const GPUBufferUsage = {
  MAP_READ: 1,
  MAP_WRITE: 2,
  COPY_SRC: 4,
  COPY_DST: 8,
  INDEX: 16,
  VERTEX: 32,
  UNIFORM: 64,
  STORAGE: 128,
  INDIRECT: 256,
  QUERY_RESOLVE: 512,
};

export type GPUColorWriteFlags = number;

export const GPUColorWrite = { RED: 1, GREEN: 2, BLUE: 4, ALPHA: 8, ALL: 15 };

export type GPUMapModeFlags = number;

export const GPUMapMode = { READ: 1, WRITE: 2 };

export type GPUShaderStageFlags = number;

export const GPUShaderStage = { VERTEX: 1, FRAGMENT: 2, COMPUTE: 4 };

export type GPUTextureUsageFlags = number;

export const GPUTextureUsage = {
  COPY_SRC: 1,
  COPY_DST: 2,
  TEXTURE_BINDING: 4,
  STORAGE_BINDING: 8,
  RENDER_ATTACHMENT: 16,
};

export type GPUAddressMode = "repeat" | "mirror-repeat" | "clamp-to-edge";

export type GPUBufferBindingType = "uniform" | "storage" | "read-only-storage";

export type GPUSamplerBindingType =
  | "filtering"
  | "non-filtering"
  | "comparison";

export type GPUTextureSampleType =
  | "float"
  | "unfilterable-float"
  | "depth"
  | "sint"
  | "uint";

export type GPUStorageTextureAccess = "write-only";

export type GPUBlendFactor =
  | "zero"
  | "one"
  | "src"
  | "one-minus-src"
  | "src-alpha"
  | "one-minus-src-alpha"
  | "dst"
  | "one-minus-dst"
  | "dst-alpha"
  | "one-minus-dst-alpha"
  | "src-alpha-saturated"
  | "constant"
  | "one-minus-constant";

export type GPUBlendOperation =
  | "add"
  | "subtract"
  | "reverse-subtract"
  | "min"
  | "max";

export type GPUBufferMapState = "unmapped" | "pending" | "mapped";

export type GPUCompareFunction =
  | "never"
  | "less"
  | "less-equal"
  | "greater"
  | "greater-equal"
  | "equal"
  | "not-equal"
  | "always";

export type GPUCompilationMessageType = "error" | "warning" | "info";

export type GPUComputePassTimestampLocation = "beginning" | "end";

export type GPUCullMode = "none" | "front" | "back";

export type GPUDeviceLostReason = "destroyed";

export type GPUErrorFilter = "validation" | "out-of-memory" | "internal";

export type GPUFeatureName =
  | "depth-clip-control"
  | "depth32float-stencil8"
  | "timestamp-query"
  | "pipeline-statistics-query"
  | "texture-compression-bc"
  | "texture-compression-etc2"
  | "texture-compression-astc"
  | "indirect-first-instance"
  | "shader-f16"
  | "rg11b10ufloat-renderable"
  | "bgra8unorm-storage";

export type GPUFilterMode = "nearest" | "linear";

export type GPUFrontFace = "ccw" | "cw";

export type GPUIndexFormat = "uint16" | "uint32";

export type GPUVertexStepMode = "vertex" | "instance";

export type GPULoadOp = "clear" | "load";

export type GPUMipmapFilterMode = "nearest" | "linear";

export type GPUStoreOp = "store" | "discard";

export type GPUPipelineStatisticName =
  | "vertex-shader-invocations"
  | "clipper-invocations"
  | "clipper-primitives-out"
  | "fragment-shader-invocations"
  | "compute-shader-invocations";

export type GPUPowerPreference = "low-power" | "high-performance";

export type GPUPrimitiveTopology =
  | "point-list"
  | "line-list"
  | "line-strip"
  | "triangle-list"
  | "triangle-strip";

export type GPUQueryType = "occlusion" | "pipeline-statistics" | "timestamp";

export type GPURenderPassTimestampLocation = "beginning" | "end";

export type GPUStencilOperation =
  | "keep"
  | "zero"
  | "replace"
  | "invert"
  | "increment-clamp"
  | "decrement-clamp"
  | "increment-wrap"
  | "decrement-wrap";

export type GPUTextureAspect = "all" | "stencil-only" | "depth-only";

export type GPUTextureDimension = "1d" | "2d" | "3d";

export type GPUTextureFormat =
  | "r8unorm"
  | "r8snorm"
  | "r8uint"
  | "r8sint"
  | "r16uint"
  | "r16sint"
  | "r16float"
  | "rg8unorm"
  | "rg8snorm"
  | "rg8uint"
  | "rg8sint"
  | "r32float"
  | "r32uint"
  | "r32sint"
  | "rg16uint"
  | "rg16sint"
  | "rg16float"
  | "rgba8unorm"
  | "rgba8unorm-srgb"
  | "rgba8snorm"
  | "rgba8uint"
  | "rgba8sint"
  | "bgra8unorm"
  | "bgra8unorm-srgb"
  | "rgb10a2unorm"
  | "rg11b10ufloat"
  | "rgb9e5ufloat"
  | "rg32float"
  | "rg32uint"
  | "rg32sint"
  | "rgba16uint"
  | "rgba16sint"
  | "rgba16float"
  | "rgba32float"
  | "rgba32uint"
  | "rgba32sint"
  | "stencil8"
  | "depth16unorm"
  | "depth24plus"
  | "depth24plus-stencil8"
  | "depth32float"
  | "depth32float-stencil8"
  | "bc1-rgba-unorm"
  | "bc1-rgba-unorm-srgb"
  | "bc2-rgba-unorm"
  | "bc2-rgba-unorm-srgb"
  | "bc3-rgba-unorm"
  | "bc3-rgba-unorm-srgb"
  | "bc4-r-unorm"
  | "bc4-r-snorm"
  | "bc5-rg-unorm"
  | "bc5-rg-snorm"
  | "bc6h-rgb-ufloat"
  | "bc6h-rgb-float"
  | "bc7-rgba-unorm"
  | "bc7-rgba-unorm-srgb"
  | "etc2-rgb8unorm"
  | "etc2-rgb8unorm-srgb"
  | "etc2-rgb8a1unorm"
  | "etc2-rgb8a1unorm-srgb"
  | "etc2-rgba8unorm"
  | "etc2-rgba8unorm-srgb"
  | "eac-r11unorm"
  | "eac-r11snorm"
  | "eac-rg11unorm"
  | "eac-rg11snorm"
  | "astc-4x4-unorm"
  | "astc-4x4-unorm-srgb"
  | "astc-5x4-unorm"
  | "astc-5x4-unorm-srgb"
  | "astc-5x5-unorm"
  | "astc-5x5-unorm-srgb"
  | "astc-6x5-unorm"
  | "astc-6x5-unorm-srgb"
  | "astc-6x6-unorm"
  | "astc-6x6-unorm-srgb"
  | "astc-8x5-unorm"
  | "astc-8x5-unorm-srgb"
  | "astc-8x6-unorm"
  | "astc-8x6-unorm-srgb"
  | "astc-8x8-unorm"
  | "astc-8x8-unorm-srgb"
  | "astc-10x5-unorm"
  | "astc-10x5-unorm-srgb"
  | "astc-10x6-unorm"
  | "astc-10x6-unorm-srgb"
  | "astc-10x8-unorm"
  | "astc-10x8-unorm-srgb"
  | "astc-10x10-unorm"
  | "astc-10x10-unorm-srgb"
  | "astc-12x10-unorm"
  | "astc-12x10-unorm-srgb"
  | "astc-12x12-unorm"
  | "astc-12x12-unorm-srgb";

export type GPUTextureViewDimension =
  | "1d"
  | "2d"
  | "2d-array"
  | "cube"
  | "cube-array"
  | "3d";

export type GPUVertexFormat =
  | "uint8x2"
  | "uint8x4"
  | "sint8x2"
  | "sint8x4"
  | "unorm8x2"
  | "unorm8x4"
  | "snorm8x2"
  | "snorm8x4"
  | "uint16x2"
  | "uint16x4"
  | "sint16x2"
  | "sint16x4"
  | "unorm16x2"
  | "unorm16x4"
  | "snorm16x2"
  | "snorm16x4"
  | "float16x2"
  | "float16x4"
  | "float32"
  | "float32x2"
  | "float32x3"
  | "float32x4"
  | "uint32"
  | "uint32x2"
  | "uint32x3"
  | "uint32x4"
  | "sint32"
  | "sint32x2"
  | "sint32x3"
  | "sint32x4";

export interface GPUQueueDescriptor {
  label?: string;
}

export interface GPUBindGroupEntry {
  binding: number;
  buffer?: GPUBuffer;
  offset?: number;
  size?: number;
  sampler?: GPUSampler;
  textureView?: GPUTextureView;
}

export interface GPUBindGroupDescriptor {
  label?: string;
  layout: GPUBindGroupLayout;
  entries: GPUBindGroupEntry[];
}

export interface GPUBufferBindingLayout {
  type?: GPUBufferBindingType;
  hasDynamicOffset?: number;
  minBindingSize?: number;
}

export interface GPUSamplerBindingLayout {
  type?: GPUSamplerBindingType;
}

export interface GPUTextureBindingLayout {
  sampleType?: GPUTextureSampleType;
  viewDimension?: GPUTextureViewDimension;
  multisampled?: number;
}

export interface GPUStorageTextureBindingLayout {
  access?: GPUStorageTextureAccess;
  format?: GPUTextureFormat;
  viewDimension?: GPUTextureViewDimension;
}

export interface GPUBindGroupLayoutEntry {
  binding: number;
  visibility: GPUShaderStageFlags;
  buffer: GPUBufferBindingLayout;
  sampler: GPUSamplerBindingLayout;
  texture: GPUTextureBindingLayout;
  storageTexture: GPUStorageTextureBindingLayout;
}

export interface GPUBindGroupLayoutDescriptor {
  label?: string;
  entries: GPUBindGroupLayoutEntry[];
}

export interface GPUBlendComponent {
  operation?: GPUBlendOperation;
  srcFactor?: GPUBlendFactor;
  dstFactor?: GPUBlendFactor;
}

export interface GPUBufferDescriptor {
  label?: string;
  usage: GPUBufferUsageFlags;
  size: number;
  mappedAtCreation?: number;
}

export interface GPUColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface GPUConstantEntry {
  key: string;
  value: number;
}

export interface GPUCommandBufferDescriptor {
  label?: string;
}

export interface GPUCommandEncoderDescriptor {
  label?: string;
}

export interface GPUCompilationMessage {
  message?: string;
  type: GPUCompilationMessageType;
  lineNum: number;
  linePos: number;
  offset: number;
  length: number;
  utf16LinePos: number;
  utf16Offset: number;
  utf16Length: number;
}

export interface GPUCompilationInfo {
  messages: GPUCompilationMessage[];
}

export interface GPUComputePassTimestampWrite {
  querySet: GPUQuerySet;
  queryIndex: number;
  location: GPUComputePassTimestampLocation;
}

export interface GPUComputePassDescriptor {
  label?: string;
  timestampWrites?: GPUComputePassTimestampWrite[];
}

export interface GPUProgrammableStage {
  module: GPUShaderModule;
  entryPoint: string;
  constants?: GPUConstantEntry[];
}

export interface GPUComputePipelineDescriptor {
  label?: string;
  layout?: GPUPipelineLayout;
  compute: GPUProgrammableStage;
}

export interface GPUExtent3DStrict {
  width: number;
  height?: number;
  depthOrArrayLayers?: number;
}

export interface GPUTextureDataLayout {
  offset?: number;
  bytesPerRow?: number;
  rowsPerImage?: number;
}

export interface GPUImageCopyBuffer {
  layout: GPUTextureDataLayout;
  buffer: GPUBuffer;
}

export interface GPUOrigin3D {
  x?: number;
  y?: number;
  z?: number;
}

export interface GPUImageCopyTexture {
  texture: GPUTexture;
  mipLevel?: number;
  origin: GPUOrigin3D;
  aspect?: GPUTextureAspect;
}

export interface GPUVertexAttribute {
  format: GPUVertexFormat;
  offset: number;
  shaderLocation: number;
}

export interface GPUVertexBufferLayout {
  arrayStride: number;
  stepMode?: GPUVertexStepMode;
  attributes: GPUVertexAttribute[];
}

export interface GPUPipelineLayoutDescriptor {
  label?: string;
  bindGroupLayouts: GPUBindGroupLayout[];
}

export interface GPUQuerySetDescriptor {
  label?: string;
  type: GPUQueryType;
  count: number;
  pipelineStatistics?: GPUPipelineStatisticName[];
}

export interface GPURenderBundleDescriptor {
  label?: string;
}

export interface GPURenderBundleEncoderDescriptor {
  label?: string;
  colorFormats: GPUTextureFormat[];
  depthStencilFormat?: GPUTextureFormat;
  sampleCount?: number;
  depthReadOnly?: number;
  stencilReadOnly?: number;
}

export interface GPURenderPassColorAttachment {
  view?: GPUTextureView;
  resolveTarget?: GPUTextureView;
  loadOp: GPULoadOp;
  storeOp: GPUStoreOp;
  clearValue: GPUColor;
}

export interface GPURenderPassDepthStencilAttachment {
  view: GPUTextureView;
  depthLoadOp?: GPULoadOp;
  depthStoreOp?: GPUStoreOp;
  depthClearValue?: number;
  depthReadOnly?: number;
  stencilLoadOp?: GPULoadOp;
  stencilStoreOp?: GPUStoreOp;
  stencilClearValue?: number;
  stencilReadOnly?: number;
}

export interface GPURenderPassTimestampWrite {
  querySet: GPUQuerySet;
  queryIndex: number;
  location: GPURenderPassTimestampLocation;
}

export interface GPURenderPassDescriptor {
  label?: string;
  colorAttachments: GPURenderPassColorAttachment[];
  depthStencilAttachment?: GPURenderPassDepthStencilAttachment;
  occlusionQuerySet?: GPUQuerySet;
  timestampWrites?: GPURenderPassTimestampWrite[];
}

export interface GPUVertexState {
  module: GPUShaderModule;
  entryPoint: string;
  constants?: GPUConstantEntry[];
  buffers?: GPUVertexBufferLayout[];
}

export interface GPUPrimitiveState {
  topology?: GPUPrimitiveTopology;
  stripIndexFormat?: GPUIndexFormat;
  frontFace?: GPUFrontFace;
  cullMode?: GPUCullMode;
}

export interface GPUStencilFaceState {
  compare?: GPUCompareFunction;
  failOp?: GPUStencilOperation;
  depthFailOp?: GPUStencilOperation;
  passOp?: GPUStencilOperation;
}

export interface GPUDepthStencilState {
  format: GPUTextureFormat;
  depthWriteEnabled: number;
  depthCompare: GPUCompareFunction;
  stencilFront: GPUStencilFaceState;
  stencilBack: GPUStencilFaceState;
  stencilReadMask?: number;
  stencilWriteMask?: number;
  depthBias?: number;
  depthBiasSlopeScale?: number;
  depthBiasClamp?: number;
}

export interface GPUMultisampleState {
  count?: number;
  mask?: number;
  alphaToCoverageEnabled?: number;
}

export interface GPUBlendState {
  color: GPUBlendComponent;
  alpha: GPUBlendComponent;
}

export interface GPUColorTargetState {
  format: GPUTextureFormat;
  blend?: GPUBlendState;
  writeMask?: GPUColorWriteFlags;
}

export interface GPUFragmentState {
  module: GPUShaderModule;
  entryPoint: string;
  constants?: GPUConstantEntry[];
  targets: GPUColorTargetState[];
}

export interface GPURenderPipelineDescriptor {
  label?: string;
  layout?: GPUPipelineLayout;
  vertex: GPUVertexState;
  primitive: GPUPrimitiveState;
  depthStencil?: GPUDepthStencilState;
  multisample: GPUMultisampleState;
  fragment?: GPUFragmentState;
}

export interface GPUSamplerDescriptor {
  label?: string;
  addressModeU?: GPUAddressMode;
  addressModeV?: GPUAddressMode;
  addressModeW?: GPUAddressMode;
  magFilter?: GPUFilterMode;
  minFilter?: GPUFilterMode;
  mipmapFilter?: GPUMipmapFilterMode;
  lodMinClamp?: number;
  lodMaxClamp?: number;
  compare?: GPUCompareFunction;
  maxAnisotropy?: number;
}

export interface GPUShaderModuleCompilationHint {
  entryPoint: string;
  layout: GPUPipelineLayout;
}

export interface GPUShaderModuleDescriptor {
  label?: string;
  hints?: GPUShaderModuleCompilationHint[];
}

export interface GPUTextureDescriptor {
  label?: string;
  usage: GPUTextureUsageFlags;
  dimension?: GPUTextureDimension;
  size: GPUExtent3DStrict;
  format: GPUTextureFormat;
  mipLevelCount?: number;
  sampleCount?: number;
  viewFormats?: GPUTextureFormat[];
}

export interface GPUTextureViewDescriptor {
  label?: string;
  format?: GPUTextureFormat;
  dimension?: GPUTextureViewDimension;
  baseMipLevel?: number;
  mipLevelCount?: number;
  baseArrayLayer?: number;
  arrayLayerCount?: number;
  aspect?: GPUTextureAspect;
}
