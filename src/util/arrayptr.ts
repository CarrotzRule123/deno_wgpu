import { AlignedType, endianess, SizedType, u32 } from "../../deps.ts";

export class ArrayPointer<T> implements SizedType<T[]>, AlignedType<T[]> {
  byteLength = 16;
  byteAlign = -8;
  typePadding;
  byteStride;
  type;
  endian;

  constructor(
    type: SizedType<T>,
    byteStride = type.byteLength,
    endian = endianess,
  ) {
    this.type = type;
    this.typePadding = 0;
    this.byteStride = byteStride;
    this.endian = endian;
  }

  read(dataView: DataView, byteOffset = 0): T[] {
    const length = u32.read(dataView, byteOffset - this.typePadding);
    const ptr = dataView.getBigUint64(byteOffset + 8, this.endian);
    const view = new Deno.UnsafePointerView(Deno.UnsafePointer.create(ptr)!);
    const bufview = new DataView(view.getArrayBuffer(this.type.byteLength));
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(this.type.read(bufview, i * this.byteStride));
    }
    return array;
  }

  write(value: T[], dataView: DataView, byteOffset = 0) {
    const buffer = new ArrayBuffer(this.type.byteLength * value.length);
    const bufView = new DataView(buffer);
    for (let i = 0; i < value.length; i++) {
      this.type.write(value[i], bufView, i * this.byteStride);
    }
    const ptr = Deno.UnsafePointer.value(Deno.UnsafePointer.of(buffer));
    u32.write(value.length, dataView, byteOffset - this.typePadding);
    dataView.setBigUint64(byteOffset + 8, BigInt(ptr), this.endian);
    return dataView.buffer;
  }
}

export const arrayptr = <T>(type: SizedType<T>) => new ArrayPointer(type);
