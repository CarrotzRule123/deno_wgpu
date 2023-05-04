// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"

export type GPUFlagsConstant = number;

export type GPUAddressMode = "repeat" | "mirror-repeat" | "clamp-to-edge";

const GPUAddressMode = { "repeat": 0, "mirror-repeat": 1, "clamp-to-edge": 2 };

export type GPUBufferBindingType = "uniform" | "storage" | "read-only-storage";

const GPUBufferBindingType = {
  "uniform": 1,
  "storage": 2,
  "read-only-storage": 3,
};

export type GPUSamplerBindingType =
  | "filtering"
  | "non-filtering"
  | "comparison";

const GPUSamplerBindingType = {
  "filtering": 1,
  "non-filtering": 2,
  "comparison": 3,
};

export type GPUTextureSampleType =
  | "float"
  | "unfilterable-float"
  | "depth"
  | "sint"
  | "uint";

const GPUTextureSampleType = {
  "float": 1,
  "unfilterable-float": 2,
  "depth": 3,
  "sint": 4,
  "uint": 5,
};

export type GPUStorageTextureAccess = "write-only";

const GPUStorageTextureAccess = { "write-only": 1 };

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

const GPUBlendFactor = {
  "zero": 0,
  "one": 1,
  "src": 2,
  "one-minus-src": 3,
  "src-alpha": 4,
  "one-minus-src-alpha": 5,
  "dst": 6,
  "one-minus-dst": 7,
  "dst-alpha": 8,
  "one-minus-dst-alpha": 9,
  "src-alpha-saturated": 10,
  "constant": 11,
  "one-minus-constant": 12,
};

export type GPUBlendOperation =
  | "add"
  | "subtract"
  | "reverse-subtract"
  | "min"
  | "max";

const GPUBlendOperation = {
  "add": 0,
  "subtract": 1,
  "reverse-subtract": 2,
  "min": 3,
  "max": 4,
};

export type GPUBufferMapState = "unmapped" | "pending" | "mapped";

const GPUBufferMapState = { "unmapped": 0, "pending": 1, "mapped": 2 };

export type GPUBufferUsageFlags = number;

export interface GPUBufferUsage {
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

const GPUCompareFunction = {
  "never": 1,
  "less": 2,
  "less-equal": 3,
  "greater": 4,
  "greater-equal": 5,
  "equal": 6,
  "not-equal": 7,
  "always": 8,
};

export type GPUCompilationInfoRequestStatus =
  | "success"
  | "error"
  | "device-lost"
  | "unknown";

const GPUCompilationInfoRequestStatus = {
  "success": 0,
  "error": 1,
  "device-lost": 2,
  "unknown": 3,
};

export type GPUComputePassTimestampLocation = "beginning" | "end";

const GPUComputePassTimestampLocation = { "beginning": 0, "end": 1 };

export type GPUCullMode = "none" | "front" | "back";

const GPUCullMode = { "none": 0, "front": 1, "back": 2 };

export type GPUErrorFilter = "validation" | "out-of-memory" | "internal";

const GPUErrorFilter = { "validation": 0, "out-of-memory": 1, "internal": 2 };

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

const GPUFeatureName = {
  "depth-clip-control": 1,
  "depth32float-stencil8": 2,
  "timestamp-query": 3,
  "pipeline-statistics-query": 4,
  "texture-compression-bc": 5,
  "texture-compression-etc2": 6,
  "texture-compression-astc": 7,
  "indirect-first-instance": 8,
  "shader-f16": 9,
  "rg11b10ufloat-renderable": 10,
  "bgra8unorm-storage": 11,
};

export type GPUFilterMode = "nearest" | "linear";

const GPUFilterMode = { "nearest": 0, "linear": 1 };

export type GPUFrontFace = "ccw" | "cw";

const GPUFrontFace = { "ccw": 0, "cw": 1 };

export type GPUIndexFormat = "uint16" | "uint32";

const GPUIndexFormat = { "uint16": 1, "uint32": 2 };

export type GPUVertexStepMode = "vertex" | "instance";

const GPUVertexStepMode = { "vertex": 0, "instance": 1 };

export type GPULoadOp = "clear" | "load";

const GPULoadOp = { "clear": 1, "load": 2 };

export type GPUMapModeFlags = number;

export interface GPUMapMode {
  readonly READ: GPUFlagsConstant;
  readonly WRITE: GPUFlagsConstant;
}

export type GPUMipmapFilterMode = "nearest" | "linear";

const GPUMipmapFilterMode = { "nearest": 0, "linear": 1 };

export type GPUStoreOp = "store" | "discard";

const GPUStoreOp = { "store": 1, "discard": 2 };

export type GPUPipelineStatisticName =
  | "vertex-shader-invocations"
  | "clipper-invocations"
  | "clipper-primitives-out"
  | "fragment-shader-invocations"
  | "compute-shader-invocations";

const GPUPipelineStatisticName = {
  "vertex-shader-invocations": 0,
  "clipper-invocations": 1,
  "clipper-primitives-out": 2,
  "fragment-shader-invocations": 3,
  "compute-shader-invocations": 4,
};

export type GPUPowerPreference = "low-power" | "high-performance";

const GPUPowerPreference = { "low-power": 1, "high-performance": 2 };

export type GPUPrimitiveTopology =
  | "point-list"
  | "line-list"
  | "line-strip"
  | "triangle-list"
  | "triangle-strip";

const GPUPrimitiveTopology = {
  "point-list": 0,
  "line-list": 1,
  "line-strip": 2,
  "triangle-list": 3,
  "triangle-strip": 4,
};

export type GPUQueryType = "occlusion" | "pipeline-statistics" | "timestamp";

const GPUQueryType = {
  "occlusion": 0,
  "pipeline-statistics": 1,
  "timestamp": 2,
};

export type GPURenderPassTimestampLocation = "beginning" | "end";

const GPURenderPassTimestampLocation = { "beginning": 0, "end": 1 };

export type GPUShaderStageFlags = number;

export interface GPUShaderStage {
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

const GPUStencilOperation = {
  "keep": 0,
  "zero": 1,
  "replace": 2,
  "invert": 3,
  "increment-clamp": 4,
  "decrement-clamp": 5,
  "increment-wrap": 6,
  "decrement-wrap": 7,
};

export type GPUTextureAspect = "all" | "stencil-only" | "depth-only";

const GPUTextureAspect = { "all": 0, "stencil-only": 1, "depth-only": 2 };

export type GPUTextureDimension = "1d" | "2d" | "3d";

const GPUTextureDimension = { "1d": 0, "2d": 1, "3d": 2 };

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

const GPUTextureFormat = {
  "r8unorm": 1,
  "r8snorm": 2,
  "r8uint": 3,
  "r8sint": 4,
  "r16uint": 5,
  "r16sint": 6,
  "r16float": 7,
  "rg8unorm": 8,
  "rg8snorm": 9,
  "rg8uint": 10,
  "rg8sint": 11,
  "r32float": 12,
  "r32uint": 13,
  "r32sint": 14,
  "rg16uint": 15,
  "rg16sint": 16,
  "rg16float": 17,
  "rgba8unorm": 18,
  "rgba8unorm-srgb": 19,
  "rgba8snorm": 20,
  "rgba8uint": 21,
  "rgba8sint": 22,
  "bgra8unorm": 23,
  "bgra8unorm-srgb": 24,
  "rgb10a2unorm": 25,
  "rg11b10ufloat": 26,
  "rgb9e5ufloat": 27,
  "rg32float": 28,
  "rg32uint": 29,
  "rg32sint": 30,
  "rgba16uint": 31,
  "rgba16sint": 32,
  "rgba16float": 33,
  "rgba32float": 34,
  "rgba32uint": 35,
  "rgba32sint": 36,
  "stencil8": 37,
  "depth16unorm": 38,
  "depth24plus": 39,
  "depth24plus-stencil8": 40,
  "depth32float": 41,
  "depth32float-stencil8": 42,
  "bc1-rgba-unorm": 43,
  "bc1-rgba-unorm-srgb": 44,
  "bc2-rgba-unorm": 45,
  "bc2-rgba-unorm-srgb": 46,
  "bc3-rgba-unorm": 47,
  "bc3-rgba-unorm-srgb": 48,
  "bc4-r-unorm": 49,
  "bc4-r-snorm": 50,
  "bc5-rg-unorm": 51,
  "bc5-rg-snorm": 52,
  "bc6h-rgb-ufloat": 53,
  "bc6h-rgb-float": 54,
  "bc7-rgba-unorm": 55,
  "bc7-rgba-unorm-srgb": 56,
  "etc2-rgb8unorm": 57,
  "etc2-rgb8unorm-srgb": 58,
  "etc2-rgb8a1unorm": 59,
  "etc2-rgb8a1unorm-srgb": 60,
  "etc2-rgba8unorm": 61,
  "etc2-rgba8unorm-srgb": 62,
  "eac-r11unorm": 63,
  "eac-r11snorm": 64,
  "eac-rg11unorm": 65,
  "eac-rg11snorm": 66,
  "astc-4x4-unorm": 67,
  "astc-4x4-unorm-srgb": 68,
  "astc-5x4-unorm": 69,
  "astc-5x4-unorm-srgb": 70,
  "astc-5x5-unorm": 71,
  "astc-5x5-unorm-srgb": 72,
  "astc-6x5-unorm": 73,
  "astc-6x5-unorm-srgb": 74,
  "astc-6x6-unorm": 75,
  "astc-6x6-unorm-srgb": 76,
  "astc-8x5-unorm": 77,
  "astc-8x5-unorm-srgb": 78,
  "astc-8x6-unorm": 79,
  "astc-8x6-unorm-srgb": 80,
  "astc-8x8-unorm": 81,
  "astc-8x8-unorm-srgb": 82,
  "astc-10x5-unorm": 83,
  "astc-10x5-unorm-srgb": 84,
  "astc-10x6-unorm": 85,
  "astc-10x6-unorm-srgb": 86,
  "astc-10x8-unorm": 87,
  "astc-10x8-unorm-srgb": 88,
  "astc-10x10-unorm": 89,
  "astc-10x10-unorm-srgb": 90,
  "astc-12x10-unorm": 91,
  "astc-12x10-unorm-srgb": 92,
  "astc-12x12-unorm": 93,
  "astc-12x12-unorm-srgb": 94,
};

export type GPUTextureUsageFlags = number;

export interface GPUTextureUsage {
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly TEXTURE_BINDING: GPUFlagsConstant;
  readonly STORAGE_BINDING: GPUFlagsConstant;
  readonly RENDER_ATTACHMENT: GPUFlagsConstant;
}

export type GPUTextureViewDimension =
  | "1d"
  | "2d"
  | "2d-array"
  | "cube"
  | "cube-array"
  | "3d";

const GPUTextureViewDimension = {
  "1d": 1,
  "2d": 2,
  "2d-array": 3,
  "cube": 4,
  "cube-array": 5,
  "3d": 6,
};

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

const GPUVertexFormat = {
  "uint8x2": 1,
  "uint8x4": 2,
  "sint8x2": 3,
  "sint8x4": 4,
  "unorm8x2": 5,
  "unorm8x4": 6,
  "snorm8x2": 7,
  "snorm8x4": 8,
  "uint16x2": 9,
  "uint16x4": 10,
  "sint16x2": 11,
  "sint16x4": 12,
  "unorm16x2": 13,
  "unorm16x4": 14,
  "snorm16x2": 15,
  "snorm16x4": 16,
  "float16x2": 17,
  "float16x4": 18,
  "float32": 19,
  "float32x2": 20,
  "float32x3": 21,
  "float32x4": 22,
  "uint32": 23,
  "uint32x2": 24,
  "uint32x3": 25,
  "uint32x4": 26,
  "sint32": 27,
  "sint32x2": 28,
  "sint32x3": 29,
  "sint32x4": 30,
};
