// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"

export type GPUFlagsConstant = number;

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

export type GPUCompareFunction =
  | "never"
  | "less"
  | "less-equal"
  | "greater"
  | "greater-equal"
  | "equal"
  | "not-equal"
  | "always";

export type GPUCompilationInfoRequestStatus =
  | "success"
  | "error"
  | "device-lost"
  | "unknown";

export type GPUComputePassTimestampLocation = "beginning" | "end";

export type GPUCanvasAlphaMode = "premultiplied" | "unpremultiplied" | "opaque";

export type GPUCullMode = "none" | "front" | "back";

export type GPUErrorFilter = "validation" | "out-of-memory" | "internal";

export type GPULoggingType = "verbose" | "info" | "warning" | "error";

export type GPUExternalTextureRotation =
  | "rotate-0degrees"
  | "rotate-90degrees"
  | "rotate-180degrees"
  | "rotate-270degrees";

export type GPUFeatureName =
  | "ndefine"
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
  | "bgra8unorm-storage"
  | "dawn-shader-float-16"
  | "dawn-internal-usages"
  | "dawn-multi-planar-formats"
  | "dawn-native"
  | "chromium-experimental-dp4a"
  | "timestamp-query-inside-passes"
  | "implicit-device-synchronization"
  | "surface-capabilities"
  | "transient-attachments";

export type GPUFilterMode = "nearest" | "linear";

export type GPUFrontFace = "ccw" | "cw";

export type GPUIndexFormat = "ndefine" | "uint16" | "uint32";

export type GPUVertexStepMode = "vertex" | "instance" | "ndefine";

export type GPULoadOp = "ndefine" | "clear" | "load";

export type GPUMapModeFlags = number;

export interface GPUMapMode {
  readonly NONE: GPUFlagsConstant;
  readonly READ: GPUFlagsConstant;
  readonly WRITE: GPUFlagsConstant;
}

export type GPUMipmapFilterMode = "nearest" | "linear";

export type GPUStoreOp = "ndefine" | "store" | "discard";

export type GPUPipelineStatisticName =
  | "vertex-shader-invocations"
  | "clipper-invocations"
  | "clipper-primitives-out"
  | "fragment-shader-invocations"
  | "compute-shader-invocations";

export type GPUPowerPreference = "ndefine" | "low-power" | "high-performance";

export type GPUPrimitiveTopology =
  | "point-list"
  | "line-list"
  | "line-strip"
  | "triangle-list"
  | "triangle-strip";

export type GPUQueryType = "occlusion" | "pipeline-statistics" | "timestamp";

export type GPURenderPassTimestampLocation = "beginning" | "end";

export type GPUShaderStageFlags = number;

export interface GPUShaderStage {
  readonly NONE: GPUFlagsConstant;
  readonly VERTEX: GPUFlagsConstant;
  readonly FRAGMENT: GPUFlagsConstant;
  readonly COMPUTE: GPUFlagsConstant;
}

export type GPUStencilOperation =
  | "keep"
  | "zero"
  | "replace"
  | "invert"
  | "increment-clamp"
  | "decrement-clamp"
  | "increment-wrap"
  | "decrement-wrap";

export type GPUTextureAspect =
  | "all"
  | "stencil-only"
  | "depth-only"
  | "plane-0only"
  | "plane-1only";

export type GPUTextureComponentType =
  | "float"
  | "sint"
  | "uint"
  | "depth-comparison";

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
  | "astc-12x12-unorm-srgb"
  | "r8bg8biplanar-420unorm";

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
