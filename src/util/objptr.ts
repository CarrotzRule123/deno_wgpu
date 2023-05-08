import { AlignedType, endianess } from "../../deps.ts";

const PointerSymbol = Symbol.for("pointer")

export type PointerObject = {
  [PointerSymbol]: Deno.PointerValue;
};

export class ObjectPointer<T extends PointerObject> implements AlignedType<T> {
  byteLength = 8;
  byteAlign = 8;
  endian;

  constructor(endian = endianess) {
    this.endian = endian;
  }

  read(_dataView: DataView, _byteOffset = 0): T {
    throw ("unreachable");
  }

  write(value: T, dataView: DataView, byteOffset = 0) {
    const ptr = Deno.UnsafePointer.value(value[PointerSymbol])
    dataView.setBigUint64(byteOffset, BigInt(ptr), this.endian);
    return dataView.buffer;
  }
}

export const objptr = new ObjectPointer();
