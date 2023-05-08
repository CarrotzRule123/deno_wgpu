import * as internals from "./generated/internals.ts";
import * as wgpu from "./generated/webgpu.ts";
import * as types from "./types.ts";
import { lib } from "./lib.ts";
import { array, ptr } from "./util/mod.ts";
import { objptr } from "./util/objptr.ts";

const PointerSymbol = Symbol.for("pointer");

export class GPUInstance {
  [PointerSymbol]: Deno.PointerValue;
  constructor() {
    this[PointerSymbol] = lib.symbols.wgpuCreateInstance(
      ptr(types.GPUInstanceDescriptor, { searchpaths: [] }),
    );
  }

  requestAdapter() {
    return new Promise<GPUAdapter>((res) => {
      const callback = new Deno.UnsafeCallback({
        parameters: ["u32", "pointer", "pointer", "pointer"],
        result: "void",
      }, (_status, adapter, _message, _userdata) => {
        res(new GPUAdapter(adapter));
      });
      lib.symbols.wgpuInstanceRequestAdapter(
        this[PointerSymbol],
        null,
        callback.pointer,
        null,
      );
    });
  }
}

export class GPUAdapter {
  [PointerSymbol]: Deno.PointerValue;
  constructor(pointer: Deno.PointerValue) {
    this[PointerSymbol] = pointer;
  }

  requestDevice() {
    return new Promise<GPUDevice>((res) => {
      const callback = new Deno.UnsafeCallback({
        parameters: ["u32", "pointer", "pointer", "pointer"],
        result: "void",
      }, (_status, device, _message, _userdata) => {
        res(new GPUDevice(device));
      });
      lib.symbols.wgpuAdapterRequestDevice(
        this[PointerSymbol],
        null,
        callback.pointer,
        null,
      );
    });
  }
}

export class GPUDevice {
  [PointerSymbol]: Deno.PointerValue;
  queue: GPUQueue;
  constructor(pointer: Deno.PointerValue) {
    this[PointerSymbol] = pointer;
    this.queue = new GPUQueue(
      lib.symbols.wgpuDeviceGetQueue(this[PointerSymbol]),
    );
  }

  createShaderModule(descriptor: types.GPUShaderModuleDescriptor) {
    return new GPUShaderModule(
      lib.symbols.wgpuDeviceCreateShaderModule(
        this[PointerSymbol],
        ptr(types.GPUShaderModuleDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }

  createPipelineLayout(descriptor: wgpu.GPUPipelineLayoutDescriptor) {
    return new GPUPipelineLayout(
      lib.symbols.wgpuDeviceCreatePipelineLayout(
        this[PointerSymbol],
        ptr(internals.GPUPipelineLayoutDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }

  createRenderPipeline(descriptor: wgpu.GPURenderPipelineDescriptor) {
    return new GPUPipelineLayout(
      lib.symbols.wgpuDeviceCreateRenderPipeline(
        this[PointerSymbol],
        ptr(internals.GPURenderPipelineDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }

  createBuffer(descriptor: wgpu.GPUBufferDescriptor) {
    return new GPUBuffer(
      lib.symbols.wgpuDeviceCreateBuffer(
        this[PointerSymbol],
        ptr(internals.GPUBufferDescriptor, descriptor),
      ),
      this,
      descriptor.label,
    );
  }

  createTexture(descriptor: wgpu.GPUTextureDescriptor) {
    return new GPUTexture(
      lib.symbols.wgpuDeviceCreateTexture(
        this[PointerSymbol],
        ptr(internals.GPUTextureDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }

  createCommandEncoder(descriptor: wgpu.GPUCommandEncoderDescriptor = {}) {
    return new GPUCommandEncoder(
      lib.symbols.wgpuDeviceCreateCommandEncoder(
        this[PointerSymbol],
        ptr(internals.GPUCommandEncoderDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }
}

export class GPUQueue {
  [PointerSymbol]: Deno.PointerValue;
  constructor(pointer: Deno.PointerValue) {
    this[PointerSymbol] = pointer;
  }

  submit(commandBuffers: Array<GPUCommandBuffer>) {
    lib.symbols.wgpuQueueSubmit(
      this[PointerSymbol],
      commandBuffers.length,
      ptr(array(objptr, commandBuffers.length), commandBuffers),
    );
  }
}

export class GPUShaderModule {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }
}

export class GPUPipelineLayout {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }
}

export class GPURenderPipeline {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }
}

export class GPUBuffer {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  device: GPUDevice;
  constructor(pointer: Deno.PointerValue, device: GPUDevice, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
    this.device = device;
  }

  mapAsync(mode: GPUMapModeFlags, offset = 0, size = 0) {
    return new Promise<void>((res, rej) => {
      const fail = setTimeout(rej, Infinity)
      const callback = new Deno.UnsafeCallback({
        parameters: ["u32", "pointer"],
        result: "void",
      }, (_status, _userdata) => {
        clearTimeout(fail)
        res()
      });
      lib.symbols.wgpuBufferMapAsync(
        this[PointerSymbol],
        mode,
        BigInt(offset),
        BigInt(size),
        callback.pointer,
        null,
      );
      this.device.queue.submit([])
    });
  }

  getMappedRange(offset = 0, size = 200) {
    const pointer = lib.symbols.wgpuBufferGetMappedRange(
      this[PointerSymbol],
      BigInt(offset),
      BigInt(size),
    );
    const view = new Deno.UnsafePointerView(pointer!);
    return view.getArrayBuffer(size);
  }

  unmap() {
    lib.symbols.wgpuBufferUnmap(this[PointerSymbol]);
  }
}

export class GPUTexture {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }

  createView(descriptor: wgpu.GPUTextureViewDescriptor = {}) {
    return new GPUTextureView(
      lib.symbols.wgpuTextureCreateView(
        this[PointerSymbol],
        ptr(internals.GPUTextureViewDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }
}

export class GPUTextureView {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }
}

export class GPUCommandEncoder {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }

  beginRenderPass(descriptor: wgpu.GPURenderPassDescriptor) {
    return new GPURenderPassEncoder(
      lib.symbols.wgpuCommandEncoderBeginRenderPass(
        this[PointerSymbol],
        ptr(internals.GPURenderPassDescriptor, descriptor),
      ),
      descriptor.label,
    );
  }

  copyTextureToBuffer(
    source: wgpu.GPUImageCopyTexture,
    destination: wgpu.GPUImageCopyBuffer,
    copySize: wgpu.GPUExtent3DStrict,
  ) {
    lib.symbols.wgpuCommandEncoderCopyTextureToBuffer(
      this[PointerSymbol],
      ptr(internals.GPUImageCopyTexture, source),
      ptr(internals.GPUImageCopyBuffer, destination),
      ptr(internals.GPUExtent3DStrict, copySize),
    );
  }

  finish() {
    return new GPUCommandBuffer(
      lib.symbols.wgpuCommandEncoderFinish(this[PointerSymbol], null),
    );
  }
}

export class GPUCommandBuffer {
  [PointerSymbol]: Deno.PointerValue;
  constructor(pointer: Deno.PointerValue) {
    this[PointerSymbol] = pointer;
  }
}

export class GPURenderPassEncoder {
  [PointerSymbol]: Deno.PointerValue;
  label?: string;
  constructor(pointer: Deno.PointerValue, label?: string) {
    this[PointerSymbol] = pointer;
    this.label = label;
  }

  setPipeline(pipeline: GPURenderPipeline) {
    lib.symbols.wgpuRenderPassEncoderSetPipeline(
      this[PointerSymbol],
      pipeline[PointerSymbol],
    );
  }

  draw(
    vertexCount: number,
    instanceCount = 1,
    firstVertex = 0,
    firstInstance = 0,
  ) {
    lib.symbols.wgpuRenderPassEncoderDraw(
      this[PointerSymbol],
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    );
  }

  end() {
    lib.symbols.wgpuRenderPassEncoderEnd(this[PointerSymbol]);
  }
}
