import {
  GPUBuffer,
  GPUBufferUsage,
  GPUCommandEncoder,
  GPUDevice,
  GPUInstance,
  GPUTexture,
  GPUTextureUsage,
} from "../mod.ts";

import * as png from "https://deno.land/x/pngs@0.1.1/mod.ts";

interface Dimensions {
  width: number;
  height: number;
}

interface CreateCapture {
  texture: GPUTexture;
  outputBuffer: GPUBuffer;
}

interface Padding {
  unpadded: number;
  padded: number;
}

const dimensions: Dimensions = {
  width: 200,
  height: 200,
};

const instance = new GPUInstance();

const adapter = await instance.requestAdapter();

const device = await adapter.requestDevice();

const shaderCode = `
@vertex
fn vs_main(@builtin(vertex_index) in_vertex_index: u32) -> @builtin(position) vec4<f32> {
    let x = f32(i32(in_vertex_index) - 1);
    let y = f32(i32(in_vertex_index & 1u) * 2 - 1);
    return vec4<f32>(x, y, 0.0, 1.0);
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 1.0);
}
`;

const shaderModule = device.createShaderModule({
  chained: {
    code: shaderCode,
  },
});

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [],
});

const renderPipeline = device.createRenderPipeline({
  layout: pipelineLayout,
  vertex: {
    module: shaderModule,
    entryPoint: "vs_main",
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fs_main",
    targets: [
      {
        format: "rgba8unorm-srgb",
      },
    ],
  },
  primitive: {},
  multisample: {},
});

const { texture, outputBuffer } = createCapture(device, dimensions);

const encoder = device.createCommandEncoder();
const renderPass = encoder.beginRenderPass({
  colorAttachments: [
    {
      view: texture.createView(),
      storeOp: "store",
      loadOp: "clear",
      clearValue: { r: 0, g: 1, b: 0, a: 1 },
    },
  ],
});
renderPass.setPipeline(renderPipeline);
renderPass.draw(3, 1);
renderPass.end();

copyToBuffer(encoder, texture, outputBuffer, dimensions);

device.queue.submit([encoder.finish()]);

await createPng(outputBuffer, dimensions);

function getRowPadding(width: number): Padding {
  // It is a webgpu requirement that BufferCopyView.layout.bytes_per_row % COPY_BYTES_PER_ROW_ALIGNMENT(256) == 0
  // So we calculate padded_bytes_per_row by rounding unpadded_bytes_per_row
  // up to the next multiple of COPY_BYTES_PER_ROW_ALIGNMENT.
  // https://en.wikipedia.org/wiki/Data_structure_alignment#Computing_padding
  const bytesPerPixel = 4;
  const unpaddedBytesPerRow = width * bytesPerPixel;
  const align = 256;
  const paddedBytesPerRowPadding = (align - unpaddedBytesPerRow % align) %
    align;
  const paddedBytesPerRow = unpaddedBytesPerRow + paddedBytesPerRowPadding;

  return {
    unpadded: unpaddedBytesPerRow,
    padded: paddedBytesPerRow,
  };
}

function createCapture(
  device: GPUDevice,
  dimensions: Dimensions,
): CreateCapture {
  const { padded } = getRowPadding(dimensions.width);
  const outputBuffer = device.createBuffer({
    label: "Capture",
    size: padded * dimensions.height,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
  });
  const texture = device.createTexture({
    label: "Capture",
    size: dimensions,
    format: "rgba8unorm-srgb",
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
  });

  return { outputBuffer, texture };
}

export function copyToBuffer(
  encoder: GPUCommandEncoder,
  texture: GPUTexture,
  outputBuffer: GPUBuffer,
  dimensions: Dimensions,
): void {
  const { padded } = getRowPadding(dimensions.width);

  encoder.copyTextureToBuffer(
    {
      texture,
      origin: {},
    },
    {
      buffer: outputBuffer,
      layout: {
        bytesPerRow: padded,
        rowsPerImage: 200,
      },
    },
    dimensions,
  );
}

export async function createPng(
  buffer: GPUBuffer,
  dimensions: Dimensions,
): Promise<void> {
  await buffer.mapAsync(1, 0, 1024 * 200);
  const inputBuffer = new Uint8Array(buffer.getMappedRange(0, 1024 * 200));
  const { padded, unpadded } = getRowPadding(dimensions.width);
  const outputBuffer = new Uint8Array(unpadded * dimensions.height);

  for (let i = 0; i < dimensions.height; i++) {
    const slice = inputBuffer
      .slice(i * padded, (i + 1) * padded)
      .slice(0, unpadded);

    outputBuffer.set(slice, i * unpadded);
  }

  const image = png.encode(
    outputBuffer,
    dimensions.width,
    dimensions.height,
    {
      stripAlpha: true,
      color: 2,
    },
  );

  Deno.writeFileSync("./examples/output.png", image);

  buffer.unmap();
}
