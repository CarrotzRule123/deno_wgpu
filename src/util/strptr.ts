import { AlignedType, endianess } from "../../deps.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export class StringPointer implements AlignedType<string> {
  byteLength = 8;
  byteAlign = 8;
  endian;

  constructor(endian = endianess) {
    this.endian = endian;
  }

  read(dataView: DataView, byteOffset = 0): string {
    const ptr = dataView.getBigUint64(byteOffset, this.endian);
    const view = new Deno.UnsafePointerView(Deno.UnsafePointer.create(ptr)!);
    let endByteLength;
    for (let i = byteOffset;; i++) {
      if (view.getUint8(i) === 0) {
        endByteLength = i - byteOffset;
        break;
      }
    }
		const buffer = new Uint8Array(view.getArrayBuffer(endByteLength))
    return decoder.decode(buffer);
  }

  write(value: string, dataView: DataView, byteOffset = 0) {
		const buffer = encoder.encode(value + "\0");
    const ptr = Deno.UnsafePointer.value(Deno.UnsafePointer.of(buffer));
    dataView.setBigUint64(byteOffset, BigInt(ptr), this.endian);
    return dataView.buffer;
  }
}

export const cstring = new StringPointer();