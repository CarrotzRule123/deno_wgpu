// Do not modify this file!
// This file was generated automatically using "tools/emitter.ts"

import { f32, f64, i32, u16, u32, u8 } from "../../deps.ts";
import {
  arrayptr,
  cstring,
  objptr,
  pointer,
  struct,
  extensible,
  option,
  enumtype,
  u64,
} from "../util/mod.ts";

export type GPURequestAdapterStatus =
  | "success"
  | "unavailable"
  | "error"
  | "unknown";

export const GPURequestAdapterStatus = {
  "success": 0,
  "unavailable": 1,
  "error": 2,
  "unknown": 3,
};

export type GPUAdapterType =
  | "discrete-gpu"
  | "integrated-gpu"
  | "cpu"
  | "unknown";

export const GPUAdapterType = {
  "discrete-gpu": 0,
  "integrated-gpu": 1,
  "cpu": 2,
  "unknown": 3,
};

export const GPUAddressMode = {
  "repeat": 0,
  "mirror-repeat": 1,
  "clamp-to-edge": 2,
};

export type GPUBackendType =
  | "null"
  | "webgpu"
  | "d3d11"
  | "d3d12"
  | "metal"
  | "vulkan"
  | "opengl"
  | "opengles";

export const GPUBackendType = {
  "null": 0,
  "webgpu": 1,
  "d3d11": 2,
  "d3d12": 3,
  "metal": 4,
  "vulkan": 5,
  "opengl": 6,
  "opengles": 7,
};

export const GPUBufferBindingType = {
  "uniform": 1,
  "storage": 2,
  "read-only-storage": 3,
};

export const GPUSamplerBindingType = {
  "filtering": 1,
  "non-filtering": 2,
  "comparison": 3,
};

export const GPUTextureSampleType = {
  "float": 1,
  "unfilterable-float": 2,
  "depth": 3,
  "sint": 4,
  "uint": 5,
};

export const GPUStorageTextureAccess = { "write-only": 1 };

export const GPUBlendFactor = {
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

export const GPUBlendOperation = {
  "add": 0,
  "subtract": 1,
  "reverse-subtract": 2,
  "min": 3,
  "max": 4,
};

export type GPUBufferMapAsyncStatus =
  | "success"
  | "error"
  | "unknown"
  | "device-lost"
  | "destroyed-before-callback"
  | "unmapped-before-callback"
  | "mapping-already-pending"
  | "offset-out-of-range"
  | "size-out-of-range"
  | "validation-error";

export const GPUBufferMapAsyncStatus = {
  "success": 0,
  "error": 1,
  "unknown": 2,
  "device-lost": 3,
  "destroyed-before-callback": 4,
  "unmapped-before-callback": 5,
  "mapping-already-pending": 6,
  "offset-out-of-range": 7,
  "size-out-of-range": 8,
  "validation-error": 9,
};

export const GPUBufferMapState = { "unmapped": 0, "pending": 1, "mapped": 2 };

export const GPUCompareFunction = {
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

export const GPUCompilationInfoRequestStatus = {
  "success": 0,
  "error": 1,
  "device-lost": 2,
  "unknown": 3,
};

export const GPUCompilationMessageType = {
  "error": 0,
  "warning": 1,
  "info": 2,
};

export const GPUComputePassTimestampLocation = { "beginning": 0, "end": 1 };

export type GPUCreatePipelineAsyncStatus =
  | "success"
  | "validation-error"
  | "internal-error"
  | "device-lost"
  | "device-destroyed"
  | "unknown";

export const GPUCreatePipelineAsyncStatus = {
  "success": 0,
  "validation-error": 1,
  "internal-error": 2,
  "device-lost": 3,
  "device-destroyed": 4,
  "unknown": 5,
};

export const GPUCullMode = { "none": 0, "front": 1, "back": 2 };

export const GPUDeviceLostReason = { "destroyed": 1 };

export const GPUErrorFilter = {
  "validation": 0,
  "out-of-memory": 1,
  "internal": 2,
};

export type GPUErrorType =
  | "no-error"
  | "validation"
  | "out-of-memory"
  | "internal"
  | "unknown"
  | "device-lost";

export const GPUErrorType = {
  "no-error": 0,
  "validation": 1,
  "out-of-memory": 2,
  "internal": 3,
  "unknown": 4,
  "device-lost": 5,
};

export const GPUFeatureName = {
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

export const GPUFilterMode = { "nearest": 0, "linear": 1 };

export const GPUFrontFace = { "ccw": 0, "cw": 1 };

export const GPUIndexFormat = { "uint16": 1, "uint32": 2 };

export const GPUVertexStepMode = { "vertex": 0, "instance": 1 };

export const GPULoadOp = { "clear": 1, "load": 2 };

export const GPUMipmapFilterMode = { "nearest": 0, "linear": 1 };

export const GPUStoreOp = { "store": 1, "discard": 2 };

export const GPUPipelineStatisticName = {
  "vertex-shader-invocations": 0,
  "clipper-invocations": 1,
  "clipper-primitives-out": 2,
  "fragment-shader-invocations": 3,
  "compute-shader-invocations": 4,
};

export const GPUPowerPreference = { "low-power": 1, "high-performance": 2 };

export type GPUPresentMode = "immediate" | "mailbox" | "fifo";

export const GPUPresentMode = { "immediate": 0, "mailbox": 1, "fifo": 2 };

export const GPUPrimitiveTopology = {
  "point-list": 0,
  "line-list": 1,
  "line-strip": 2,
  "triangle-list": 3,
  "triangle-strip": 4,
};

export const GPUQueryType = {
  "occlusion": 0,
  "pipeline-statistics": 1,
  "timestamp": 2,
};

export type GPUQueueWorkDoneStatus =
  | "success"
  | "error"
  | "unknown"
  | "device-lost";

export const GPUQueueWorkDoneStatus = {
  "success": 0,
  "error": 1,
  "unknown": 2,
  "device-lost": 3,
};

export const GPURenderPassTimestampLocation = { "beginning": 0, "end": 1 };

export type GPURequestDeviceStatus = "success" | "error" | "unknown";

export const GPURequestDeviceStatus = {
  "success": 0,
  "error": 1,
  "unknown": 2,
};

export const GPUStencilOperation = {
  "keep": 0,
  "zero": 1,
  "replace": 2,
  "invert": 3,
  "increment-clamp": 4,
  "decrement-clamp": 5,
  "increment-wrap": 6,
  "decrement-wrap": 7,
};

export type GPUSType =
  | "surface-descriptor-from-metal-layer"
  | "surface-descriptor-from-windows-hwnd"
  | "surface-descriptor-from-xlib-window"
  | "surface-descriptor-from-canvas-html-selector"
  | "shader-module-spirv-descriptor"
  | "shader-module-wgsl-descriptor"
  | "primitive-depth-clip-control"
  | "surface-descriptor-from-wayland-surface"
  | "surface-descriptor-from-android-native-window"
  | "surface-descriptor-from-xcb-window"
  | "render-pass-descriptor-max-draw-count";

export const GPUSType = {
  "surface-descriptor-from-metal-layer": 1,
  "surface-descriptor-from-windows-hwnd": 2,
  "surface-descriptor-from-xlib-window": 3,
  "surface-descriptor-from-canvas-html-selector": 4,
  "shader-module-spirv-descriptor": 5,
  "shader-module-wgsl-descriptor": 6,
  "primitive-depth-clip-control": 7,
  "surface-descriptor-from-wayland-surface": 8,
  "surface-descriptor-from-android-native-window": 9,
  "surface-descriptor-from-xcb-window": 10,
  "render-pass-descriptor-max-draw-count": 15,
};

export const GPUTextureAspect = {
  "all": 0,
  "stencil-only": 1,
  "depth-only": 2,
};

export const GPUTextureDimension = { "1d": 0, "2d": 1, "3d": 2 };

export const GPUTextureFormat = {
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

export const GPUTextureViewDimension = {
  "1d": 1,
  "2d": 2,
  "2d-array": 3,
  "cube": 4,
  "cube-array": 5,
  "3d": 6,
};

export const GPUVertexFormat = {
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

export interface GPURequestAdapterOptions {
  compatibleSurface?: GPUSurface;
  powerPreference?: GPUPowerPreference;
  forceFallbackAdapter?: number;
}

export const GPURequestAdapterOptions = extensible({
  compatibleSurface: option(objptr, null),
  powerPreference: option(enumtype(GPUPowerPreference), 0),
  forceFallbackAdapter: option(u8, 0),
});

export interface GPUAdapterProperties {
  vendorID: number;
  vendorName: string;
  architecture: string;
  deviceID: number;
  name: string;
  driverDescription: string;
  adapterType: GPUAdapterType;
  backendType: GPUBackendType;
}

export const GPUAdapterProperties = extensible({
  vendorID: u32,
  vendorName: cstring,
  architecture: cstring,
  deviceID: u32,
  name: cstring,
  driverDescription: cstring,
  adapterType: enumtype(GPUAdapterType),
  backendType: enumtype(GPUBackendType),
});

export interface GPULimits {
  maxTextureDimension1D?: number;
  maxTextureDimension2D?: number;
  maxTextureDimension3D?: number;
  maxTextureArrayLayers?: number;
  maxBindGroups?: number;
  maxBindingsPerBindGroup?: number;
  maxDynamicUniformBuffersPerPipelineLayout?: number;
  maxDynamicStorageBuffersPerPipelineLayout?: number;
  maxSampledTexturesPerShaderStage?: number;
  maxSamplersPerShaderStage?: number;
  maxStorageBuffersPerShaderStage?: number;
  maxStorageTexturesPerShaderStage?: number;
  maxUniformBuffersPerShaderStage?: number;
  maxUniformBufferBindingSize?: number;
  maxStorageBufferBindingSize?: number;
  minUniformBufferOffsetAlignment?: number;
  minStorageBufferOffsetAlignment?: number;
  maxVertexBuffers?: number;
  maxBufferSize?: number;
  maxVertexAttributes?: number;
  maxVertexBufferArrayStride?: number;
  maxInterStageShaderComponents?: number;
  maxInterStageShaderVariables?: number;
  maxColorAttachments?: number;
  maxColorAttachmentBytesPerSample?: number;
  maxComputeWorkgroupStorageSize?: number;
  maxComputeInvocationsPerWorkgroup?: number;
  maxComputeWorkgroupSizeX?: number;
  maxComputeWorkgroupSizeY?: number;
  maxComputeWorkgroupSizeZ?: number;
  maxComputeWorkgroupsPerDimension?: number;
}

export const GPULimits = struct({
  maxTextureDimension1D: option(u32, 0xffffffff),
  maxTextureDimension2D: option(u32, 0xffffffff),
  maxTextureDimension3D: option(u32, 0xffffffff),
  maxTextureArrayLayers: option(u32, 0xffffffff),
  maxBindGroups: option(u32, 0xffffffff),
  maxBindingsPerBindGroup: option(u32, 0xffffffff),
  maxDynamicUniformBuffersPerPipelineLayout: option(u32, 0xffffffff),
  maxDynamicStorageBuffersPerPipelineLayout: option(u32, 0xffffffff),
  maxSampledTexturesPerShaderStage: option(u32, 0xffffffff),
  maxSamplersPerShaderStage: option(u32, 0xffffffff),
  maxStorageBuffersPerShaderStage: option(u32, 0xffffffff),
  maxStorageTexturesPerShaderStage: option(u32, 0xffffffff),
  maxUniformBuffersPerShaderStage: option(u32, 0xffffffff),
  maxUniformBufferBindingSize: option(u64, 0xffffffffffffffffn),
  maxStorageBufferBindingSize: option(u64, 0xffffffffffffffffn),
  minUniformBufferOffsetAlignment: option(u32, 0xffffffff),
  minStorageBufferOffsetAlignment: option(u32, 0xffffffff),
  maxVertexBuffers: option(u32, 0xffffffff),
  maxBufferSize: option(u64, 0xffffffffffffffffn),
  maxVertexAttributes: option(u32, 0xffffffff),
  maxVertexBufferArrayStride: option(u32, 0xffffffff),
  maxInterStageShaderComponents: option(u32, 0xffffffff),
  maxInterStageShaderVariables: option(u32, 0xffffffff),
  maxColorAttachments: option(u32, 0xffffffff),
  maxColorAttachmentBytesPerSample: option(u32, 0xffffffff),
  maxComputeWorkgroupStorageSize: option(u32, 0xffffffff),
  maxComputeInvocationsPerWorkgroup: option(u32, 0xffffffff),
  maxComputeWorkgroupSizeX: option(u32, 0xffffffff),
  maxComputeWorkgroupSizeY: option(u32, 0xffffffff),
  maxComputeWorkgroupSizeZ: option(u32, 0xffffffff),
  maxComputeWorkgroupsPerDimension: option(u32, 0xffffffff),
});

export interface GPURequiredLimits {
  limits: GPULimits;
}

export const GPURequiredLimits = extensible({ limits: GPULimits });

export const GPUQueueDescriptor = extensible({ label: option(cstring, null) });

export interface GPUDeviceDescriptor {
  label?: string;
  requiredFeatures?: GPUFeatureName[];
  requiredLimits?: GPURequiredLimits;
  defaultQueue: GPUQueueDescriptor;
}

export const GPUDeviceDescriptor = extensible({
  label: option(cstring, null),
  requiredFeatures: option(arrayptr(enumtype(GPUFeatureName)), null),
  requiredLimits: option(pointer(GPURequiredLimits), null),
  defaultQueue: GPUQueueDescriptor,
});

export const GPUBindGroupEntry = extensible({
  binding: u32,
  buffer: option(objptr, null),
  offset: option(u64, 0n),
  size: option(u64, 0xffffffffffffffffn),
  sampler: option(objptr, null),
  textureView: option(objptr, null),
});

export const GPUBindGroupDescriptor = extensible({
  label: option(cstring, null),
  layout: objptr,
  entries: arrayptr(GPUBindGroupEntry),
});

export const GPUBufferBindingLayout = extensible({
  type: option(enumtype(GPUBufferBindingType), 0),
  hasDynamicOffset: option(u8, 0),
  minBindingSize: option(u64, 0n),
});

export const GPUSamplerBindingLayout = extensible({
  type: option(enumtype(GPUSamplerBindingType), 0),
});

export const GPUTextureBindingLayout = extensible({
  sampleType: option(enumtype(GPUTextureSampleType), 0),
  viewDimension: option(enumtype(GPUTextureViewDimension), 0),
  multisampled: option(u8, 0),
});

export const GPUStorageTextureBindingLayout = extensible({
  access: option(enumtype(GPUStorageTextureAccess), 0),
  format: option(enumtype(GPUTextureFormat), 0),
  viewDimension: option(enumtype(GPUTextureViewDimension), 0),
});

export const GPUBindGroupLayoutEntry = extensible({
  binding: u32,
  visibility: u32,
  buffer: GPUBufferBindingLayout,
  sampler: GPUSamplerBindingLayout,
  texture: GPUTextureBindingLayout,
  storageTexture: GPUStorageTextureBindingLayout,
});

export const GPUBindGroupLayoutDescriptor = extensible({
  label: option(cstring, null),
  entries: arrayptr(GPUBindGroupLayoutEntry),
});

export const GPUBlendComponent = struct({
  operation: option(enumtype(GPUBlendOperation), "add"),
  srcFactor: option(enumtype(GPUBlendFactor), "one"),
  dstFactor: option(enumtype(GPUBlendFactor), "zero"),
});

export const GPUBufferDescriptor = extensible({
  label: option(cstring, null),
  usage: u32,
  size: u64,
  mappedAtCreation: option(u8, 0),
});

export const GPUColor = struct({ r: f64, g: f64, b: f64, a: f64 });

export const GPUConstantEntry = extensible({ key: cstring, value: f64 });

export const GPUCommandBufferDescriptor = extensible({
  label: option(cstring, null),
});

export const GPUCommandEncoderDescriptor = extensible({
  label: option(cstring, null),
});

export const GPUCompilationMessage = extensible({
  message: option(cstring, null),
  type: enumtype(GPUCompilationMessageType),
  lineNum: u64,
  linePos: u64,
  offset: u64,
  length: u64,
  utf16LinePos: u64,
  utf16Offset: u64,
  utf16Length: u64,
});

export const GPUCompilationInfo = extensible({
  messages: arrayptr(GPUCompilationMessage),
});

export const GPUComputePassTimestampWrite = struct({
  querySet: objptr,
  queryIndex: u32,
  location: enumtype(GPUComputePassTimestampLocation),
});

export const GPUComputePassDescriptor = extensible({
  label: option(cstring, null),
  timestampWrites: option(arrayptr(GPUComputePassTimestampWrite), null),
});

export const GPUProgrammableStage = extensible({
  module: objptr,
  entryPoint: cstring,
  constants: option(arrayptr(GPUConstantEntry), null),
});

export const GPUComputePipelineDescriptor = extensible({
  label: option(cstring, null),
  layout: option(objptr, null),
  compute: GPUProgrammableStage,
});

export interface GPUSupportedLimits {
  limits: GPULimits;
}

export const GPUSupportedLimits = extensible({ limits: GPULimits });

export const GPUExtent3DStrict = struct({
  width: u32,
  height: option(u32, 1),
  depthOrArrayLayers: option(u32, 1),
});

export const GPUTextureDataLayout = extensible({
  offset: option(u64, 0n),
  bytesPerRow: option(u32, 0xffffffff),
  rowsPerImage: option(u32, 0xffffffff),
});

export const GPUImageCopyBuffer = extensible({
  layout: GPUTextureDataLayout,
  buffer: objptr,
});

export const GPUOrigin3D = struct({
  x: option(u32, 0),
  y: option(u32, 0),
  z: option(u32, 0),
});

export const GPUImageCopyTexture = extensible({
  texture: objptr,
  mipLevel: option(u32, 0),
  origin: GPUOrigin3D,
  aspect: option(enumtype(GPUTextureAspect), "all"),
});

export interface GPUInstanceDescriptor {}

export const GPUInstanceDescriptor = extensible({});

export const GPUVertexAttribute = struct({
  format: enumtype(GPUVertexFormat),
  offset: u64,
  shaderLocation: u32,
});

export const GPUVertexBufferLayout = struct({
  arrayStride: u64,
  stepMode: option(enumtype(GPUVertexStepMode), "vertex"),
  attributes: arrayptr(GPUVertexAttribute),
});

export const GPUPipelineLayoutDescriptor = extensible({
  label: option(cstring, null),
  bindGroupLayouts: arrayptr(objptr),
});

export const GPUQuerySetDescriptor = extensible({
  label: option(cstring, null),
  type: enumtype(GPUQueryType),
  count: u32,
  pipelineStatistics: option(
    arrayptr(enumtype(GPUPipelineStatisticName)),
    null
  ),
});

export const GPURenderBundleDescriptor = extensible({
  label: option(cstring, null),
});

export const GPURenderBundleEncoderDescriptor = extensible({
  label: option(cstring, null),
  colorFormats: arrayptr(enumtype(GPUTextureFormat)),
  depthStencilFormat: option(enumtype(GPUTextureFormat), 0),
  sampleCount: option(u32, 1),
  depthReadOnly: option(u8, 0),
  stencilReadOnly: option(u8, 0),
});

export const GPURenderPassColorAttachment = struct({
  view: option(objptr, null),
  resolveTarget: option(objptr, null),
  loadOp: enumtype(GPULoadOp),
  storeOp: enumtype(GPUStoreOp),
  clearValue: GPUColor,
});

export const GPURenderPassDepthStencilAttachment = struct({
  view: objptr,
  depthLoadOp: option(enumtype(GPULoadOp), 0),
  depthStoreOp: option(enumtype(GPUStoreOp), 0),
  depthClearValue: option(f32, NaN),
  depthReadOnly: option(u8, 0),
  stencilLoadOp: option(enumtype(GPULoadOp), 0),
  stencilStoreOp: option(enumtype(GPUStoreOp), 0),
  stencilClearValue: option(u32, 0),
  stencilReadOnly: option(u8, 0),
});

export const GPURenderPassTimestampWrite = struct({
  querySet: objptr,
  queryIndex: u32,
  location: enumtype(GPURenderPassTimestampLocation),
});

export const GPURenderPassDescriptor = extensible({
  label: option(cstring, null),
  colorAttachments: arrayptr(GPURenderPassColorAttachment),
  depthStencilAttachment: option(
    pointer(GPURenderPassDepthStencilAttachment),
    null
  ),
  occlusionQuerySet: option(objptr, null),
  timestampWrites: option(arrayptr(GPURenderPassTimestampWrite), null),
});

export interface GPURenderPassDescriptorMaxDrawCount {
  maxDrawCount?: number;
}

export const GPURenderPassDescriptorMaxDrawCount = struct({
  maxDrawCount: option(u64, 50000000n),
});

export const GPUVertexState = extensible({
  module: objptr,
  entryPoint: cstring,
  constants: option(arrayptr(GPUConstantEntry), null),
  buffers: option(arrayptr(GPUVertexBufferLayout), null),
});

export const GPUPrimitiveState = extensible({
  topology: option(enumtype(GPUPrimitiveTopology), "triangle-list"),
  stripIndexFormat: option(enumtype(GPUIndexFormat), 0),
  frontFace: option(enumtype(GPUFrontFace), "ccw"),
  cullMode: option(enumtype(GPUCullMode), "none"),
});

export interface GPUPrimitiveDepthClipControl {
  unclippedDepth?: number;
}

export const GPUPrimitiveDepthClipControl = struct({
  unclippedDepth: option(u8, 0),
});

export const GPUStencilFaceState = struct({
  compare: option(enumtype(GPUCompareFunction), "always"),
  failOp: option(enumtype(GPUStencilOperation), "keep"),
  depthFailOp: option(enumtype(GPUStencilOperation), "keep"),
  passOp: option(enumtype(GPUStencilOperation), "keep"),
});

export const GPUDepthStencilState = extensible({
  format: enumtype(GPUTextureFormat),
  depthWriteEnabled: u8,
  depthCompare: enumtype(GPUCompareFunction),
  stencilFront: GPUStencilFaceState,
  stencilBack: GPUStencilFaceState,
  stencilReadMask: option(u32, 4294967295),
  stencilWriteMask: option(u32, 4294967295),
  depthBias: option(i32, 0),
  depthBiasSlopeScale: option(f32, 0),
  depthBiasClamp: option(f32, 0),
});

export const GPUMultisampleState = extensible({
  count: option(u32, 1),
  mask: option(u32, 4294967295),
  alphaToCoverageEnabled: option(u8, 0),
});

export const GPUBlendState = struct({
  color: GPUBlendComponent,
  alpha: GPUBlendComponent,
});

export const GPUColorTargetState = extensible({
  format: enumtype(GPUTextureFormat),
  blend: option(pointer(GPUBlendState), null),
  writeMask: option(u32, 15),
});

export const GPUFragmentState = extensible({
  module: objptr,
  entryPoint: cstring,
  constants: option(arrayptr(GPUConstantEntry), null),
  targets: arrayptr(GPUColorTargetState),
});

export const GPURenderPipelineDescriptor = extensible({
  label: option(cstring, null),
  layout: option(objptr, null),
  vertex: GPUVertexState,
  primitive: GPUPrimitiveState,
  depthStencil: option(pointer(GPUDepthStencilState), null),
  multisample: GPUMultisampleState,
  fragment: option(pointer(GPUFragmentState), null),
});

export const GPUSamplerDescriptor = extensible({
  label: option(cstring, null),
  addressModeU: option(enumtype(GPUAddressMode), "clamp-to-edge"),
  addressModeV: option(enumtype(GPUAddressMode), "clamp-to-edge"),
  addressModeW: option(enumtype(GPUAddressMode), "clamp-to-edge"),
  magFilter: option(enumtype(GPUFilterMode), "nearest"),
  minFilter: option(enumtype(GPUFilterMode), "nearest"),
  mipmapFilter: option(enumtype(GPUMipmapFilterMode), "nearest"),
  lodMinClamp: option(f32, 0),
  lodMaxClamp: option(f32, 1000),
  compare: option(enumtype(GPUCompareFunction), 0),
  maxAnisotropy: option(u16, 1),
});

export const GPUShaderModuleCompilationHint = extensible({
  entryPoint: cstring,
  layout: objptr,
});

export const GPUShaderModuleDescriptor = extensible({
  label: option(cstring, null),
  hints: option(arrayptr(GPUShaderModuleCompilationHint), null),
});

export interface GPUShaderModuleSPIRVDescriptor {
  code: Array<number>;
}

export const GPUShaderModuleSPIRVDescriptor = struct({ code: arrayptr(u32) });

export interface GPUShaderModuleWGSLDescriptor {
  code: string;
}

export const GPUShaderModuleWGSLDescriptor = struct({ code: cstring });

export interface GPUSurfaceDescriptor {
  label?: string;
}

export const GPUSurfaceDescriptor = extensible({
  label: option(cstring, null),
});

export interface GPUSurfaceDescriptorFromCanvasHTMLSelector {
  selector: string;
}

export const GPUSurfaceDescriptorFromCanvasHTMLSelector = struct({
  selector: cstring,
});

export interface GPUSurfaceDescriptorFromXcbWindow {
  connection: unknown;
  window: number;
}

export const GPUSurfaceDescriptorFromXcbWindow = struct({
  connection: objptr,
  window: u32,
});

export interface GPUSwapChainDescriptor {
  label?: string;
  usage: GPUTextureUsageFlags;
  format: GPUTextureFormat;
  width: number;
  height: number;
  presentMode: GPUPresentMode;
}

export const GPUSwapChainDescriptor = extensible({
  label: option(cstring, null),
  usage: u32,
  format: enumtype(GPUTextureFormat),
  width: u32,
  height: u32,
  presentMode: enumtype(GPUPresentMode),
});

export const GPUTextureDescriptor = extensible({
  label: option(cstring, null),
  usage: u32,
  dimension: option(enumtype(GPUTextureDimension), "2d"),
  size: GPUExtent3DStrict,
  format: enumtype(GPUTextureFormat),
  mipLevelCount: option(u32, 1),
  sampleCount: option(u32, 1),
  viewFormats: option(arrayptr(enumtype(GPUTextureFormat)), null),
});

export const GPUTextureViewDescriptor = extensible({
  label: option(cstring, null),
  format: option(enumtype(GPUTextureFormat), 0),
  dimension: option(enumtype(GPUTextureViewDimension), 0),
  baseMipLevel: option(u32, 0),
  mipLevelCount: option(u32, 0xffffffff),
  baseArrayLayer: option(u32, 0),
  arrayLayerCount: option(u32, 0xffffffff),
  aspect: option(enumtype(GPUTextureAspect), "all"),
});
