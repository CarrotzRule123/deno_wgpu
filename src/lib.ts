export const lib = Deno.dlopen("lib/wgpu_native.dll", {
// export const lib = Deno.dlopen("../../rust/wgpu-native/target/debug/wgpu_native.dll", {
  wgpuAdapterGetLimits: { parameters: ["pointer", "pointer"], result: "u8" },
  wgpuAdapterGetProperties: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuAdapterHasFeature: { parameters: ["pointer", "u32"], result: "u8" },
  wgpuAdapterEnumerateFeatures: {
    parameters: ["pointer", "pointer"],
    result: "usize",
  },
  wgpuAdapterRequestDevice: {
    parameters: ["pointer", "pointer", "function", "pointer"],
    result: "void",
  },
  wgpuBindGroupSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuBindGroupLayoutSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuBufferMapAsync: {
    parameters: ["pointer", "u32", "usize", "usize", "function", "pointer"],
    result: "void",
  },
  wgpuBufferGetMappedRange: {
    parameters: ["pointer", "usize", "usize"],
    result: "pointer",
  },
  wgpuBufferGetConstMappedRange: {
    parameters: ["pointer", "usize", "usize"],
    result: "pointer",
  },
  wgpuBufferSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuBufferGetUsage: { parameters: ["pointer"], result: "u32" },
  wgpuBufferGetSize: { parameters: ["pointer"], result: "u64" },
  wgpuBufferGetMapState: { parameters: ["pointer"], result: "u32" },
  wgpuBufferUnmap: { parameters: ["pointer"], result: "void" },
  wgpuBufferDestroy: { parameters: ["pointer"], result: "void" },
  wgpuCommandBufferSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuCommandEncoderFinish: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuCommandEncoderBeginComputePass: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuCommandEncoderBeginRenderPass: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuCommandEncoderCopyBufferToBuffer: {
    parameters: ["pointer", "pointer", "u64", "pointer", "u64", "u64"],
    result: "void",
  },
  wgpuCommandEncoderCopyBufferToTexture: {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  wgpuCommandEncoderCopyTextureToBuffer: {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  wgpuCommandEncoderCopyTextureToTexture: {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  wgpuCommandEncoderClearBuffer: {
    parameters: ["pointer", "pointer", "u64", "u64"],
    result: "void",
  },
  wgpuCommandEncoderInsertDebugMarker: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuCommandEncoderPopDebugGroup: { parameters: ["pointer"], result: "void" },
  wgpuCommandEncoderPushDebugGroup: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuCommandEncoderResolveQuerySet: {
    parameters: ["pointer", "pointer", "u32", "u32", "pointer", "u64"],
    result: "void",
  },
  wgpuCommandEncoderWriteTimestamp: {
    parameters: ["pointer", "pointer", "u32"],
    result: "void",
  },
  wgpuCommandEncoderSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuComputePassEncoderInsertDebugMarker: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuComputePassEncoderPopDebugGroup: {
    parameters: ["pointer"],
    result: "void",
  },
  wgpuComputePassEncoderPushDebugGroup: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuComputePassEncoderSetPipeline: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuComputePassEncoderSetBindGroup: {
    parameters: ["pointer", "u32", "pointer", "u32", "pointer"],
    result: "void",
  },
  wgpuComputePassEncoderBeginPipelineStatisticsQuery: {
    parameters: ["pointer", "pointer", "u32"],
    result: "void",
  },
  wgpuComputePassEncoderDispatchWorkgroups: {
    parameters: ["pointer", "u32", "u32", "u32"],
    result: "void",
  },
  wgpuComputePassEncoderDispatchWorkgroupsIndirect: {
    parameters: ["pointer", "pointer", "u64"],
    result: "void",
  },
  wgpuComputePassEncoderEnd: { parameters: ["pointer"], result: "void" },
  wgpuComputePassEncoderEndPipelineStatisticsQuery: {
    parameters: ["pointer"],
    result: "void",
  },
  wgpuComputePassEncoderSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuComputePipelineGetBindGroupLayout: {
    parameters: ["pointer", "u32"],
    result: "pointer",
  },
  wgpuComputePipelineSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuDeviceCreateBindGroup: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateBindGroupLayout: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateBuffer: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateCommandEncoder: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateComputePipeline: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateComputePipelineAsync: {
    parameters: ["pointer", "pointer", "function", "pointer"],
    result: "void",
  },
  wgpuDeviceCreatePipelineLayout: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateQuerySet: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateRenderPipelineAsync: {
    parameters: ["pointer", "pointer", "function", "pointer"],
    result: "void",
  },
  wgpuDeviceCreateRenderBundleEncoder: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateRenderPipeline: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateSampler: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateShaderModule: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateSwapChain: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceCreateTexture: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuDeviceDestroy: { parameters: ["pointer"], result: "void" },
  wgpuDeviceGetLimits: { parameters: ["pointer", "pointer"], result: "u8" },
  wgpuDeviceHasFeature: { parameters: ["pointer", "u32"], result: "u8" },
  wgpuDeviceEnumerateFeatures: {
    parameters: ["pointer", "pointer"],
    result: "usize",
  },
  wgpuDeviceGetQueue: { parameters: ["pointer"], result: "pointer" },
  wgpuDeviceSetUncapturedErrorCallback: {
    parameters: ["pointer", "function", "pointer"],
    result: "void",
  },
  wgpuDeviceSetDeviceLostCallback: {
    parameters: ["pointer", "function", "pointer"],
    result: "void",
  },
  wgpuDevicePushErrorScope: { parameters: ["pointer", "u32"], result: "void" },
  wgpuDevicePopErrorScope: {
    parameters: ["pointer", "function", "pointer"],
    result: "u8",
  },
  wgpuDeviceSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuInstanceCreateSurface: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuInstanceProcessEvents: { parameters: ["pointer"], result: "void" },
  wgpuInstanceRequestAdapter: {
    parameters: ["pointer", "pointer", "function", "pointer"],
    result: "void",
  },
  wgpuPipelineLayoutSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuQuerySetSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuQuerySetGetType: { parameters: ["pointer"], result: "u32" },
  wgpuQuerySetGetCount: { parameters: ["pointer"], result: "u32" },
  wgpuQuerySetDestroy: { parameters: ["pointer"], result: "void" },
  wgpuQueueSubmit: {
    parameters: ["pointer", "u32", "pointer"],
    result: "void",
  },
  wgpuQueueOnSubmittedWorkDone: {
    parameters: ["pointer", "function", "pointer"],
    result: "void",
  },
  wgpuQueueWriteBuffer: {
    parameters: ["pointer", "pointer", "u64", "pointer", "usize"],
    result: "void",
  },
  wgpuQueueWriteTexture: {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "usize",
      "pointer",
      "pointer",
    ],
    result: "void",
  },
  wgpuQueueSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuRenderBundleEncoderSetPipeline: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderBundleEncoderSetBindGroup: {
    parameters: ["pointer", "u32", "pointer", "u32", "pointer"],
    result: "void",
  },
  wgpuRenderBundleEncoderDraw: {
    parameters: ["pointer", "u32", "u32", "u32", "u32"],
    result: "void",
  },
  wgpuRenderBundleEncoderDrawIndexed: {
    parameters: ["pointer", "u32", "u32", "u32", "i32", "u32"],
    result: "void",
  },
  wgpuRenderBundleEncoderDrawIndirect: {
    parameters: ["pointer", "pointer", "u64"],
    result: "void",
  },
  wgpuRenderBundleEncoderDrawIndexedIndirect: {
    parameters: ["pointer", "pointer", "u64"],
    result: "void",
  },
  wgpuRenderBundleEncoderInsertDebugMarker: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderBundleEncoderPopDebugGroup: {
    parameters: ["pointer"],
    result: "void",
  },
  wgpuRenderBundleEncoderPushDebugGroup: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderBundleEncoderSetVertexBuffer: {
    parameters: ["pointer", "u32", "pointer", "u64", "u64"],
    result: "void",
  },
  wgpuRenderBundleEncoderSetIndexBuffer: {
    parameters: ["pointer", "pointer", "u32", "u64", "u64"],
    result: "void",
  },
  wgpuRenderBundleEncoderFinish: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuRenderBundleEncoderSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderSetPipeline: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderSetBindGroup: {
    parameters: ["pointer", "u32", "pointer", "u32", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderDraw: {
    parameters: ["pointer", "u32", "u32", "u32", "u32"],
    result: "void",
  },
  wgpuRenderPassEncoderDrawIndexed: {
    parameters: ["pointer", "u32", "u32", "u32", "i32", "u32"],
    result: "void",
  },
  wgpuRenderPassEncoderDrawIndirect: {
    parameters: ["pointer", "pointer", "u64"],
    result: "void",
  },
  wgpuRenderPassEncoderDrawIndexedIndirect: {
    parameters: ["pointer", "pointer", "u64"],
    result: "void",
  },
  wgpuRenderPassEncoderExecuteBundles: {
    parameters: ["pointer", "u32", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderInsertDebugMarker: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderPopDebugGroup: {
    parameters: ["pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderPushDebugGroup: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderSetStencilReference: {
    parameters: ["pointer", "u32"],
    result: "void",
  },
  wgpuRenderPassEncoderSetBlendConstant: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderSetViewport: {
    parameters: ["pointer", "f32", "f32", "f32", "f32", "f32", "f32"],
    result: "void",
  },
  wgpuRenderPassEncoderSetScissorRect: {
    parameters: ["pointer", "u32", "u32", "u32", "u32"],
    result: "void",
  },
  wgpuRenderPassEncoderSetVertexBuffer: {
    parameters: ["pointer", "u32", "pointer", "u64", "u64"],
    result: "void",
  },
  wgpuRenderPassEncoderSetIndexBuffer: {
    parameters: ["pointer", "pointer", "u32", "u64", "u64"],
    result: "void",
  },
  wgpuRenderPassEncoderBeginOcclusionQuery: {
    parameters: ["pointer", "u32"],
    result: "void",
  },
  wgpuRenderPassEncoderBeginPipelineStatisticsQuery: {
    parameters: ["pointer", "pointer", "u32"],
    result: "void",
  },
  wgpuRenderPassEncoderEndOcclusionQuery: {
    parameters: ["pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderEnd: { parameters: ["pointer"], result: "void" },
  wgpuRenderPassEncoderEndPipelineStatisticsQuery: {
    parameters: ["pointer"],
    result: "void",
  },
  wgpuRenderPassEncoderSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuRenderPipelineGetBindGroupLayout: {
    parameters: ["pointer", "u32"],
    result: "pointer",
  },
  wgpuRenderPipelineSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuSamplerSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuShaderModuleGetCompilationInfo: {
    parameters: ["pointer", "function", "pointer"],
    result: "void",
  },
  wgpuShaderModuleSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuSurfaceGetPreferredFormat: {
    parameters: ["pointer", "pointer"],
    result: "u32",
  },
  wgpuSwapChainGetCurrentTextureView: {
    parameters: ["pointer"],
    result: "pointer",
  },
  wgpuSwapChainPresent: { parameters: ["pointer"], result: "void" },
  wgpuTextureCreateView: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  wgpuTextureSetLabel: { parameters: ["pointer", "pointer"], result: "void" },
  wgpuTextureGetWidth: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetHeight: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetDepthOrArrayLayers: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetMipLevelCount: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetSampleCount: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetDimension: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetFormat: { parameters: ["pointer"], result: "u32" },
  wgpuTextureGetUsage: { parameters: ["pointer"], result: "u32" },
  wgpuTextureDestroy: { parameters: ["pointer"], result: "void" },
  wgpuTextureViewSetLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  wgpuCreateInstance: { parameters: ["pointer"], result: "pointer" },
});
