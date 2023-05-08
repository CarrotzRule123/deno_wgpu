import { AlignedType, SizedType } from "../../deps.ts";
import { Padded } from "./mod.ts";
import { AlignedStruct } from "./struct.ts";

export class Extensible<T> implements AlignedType<T> {
  byteLength;
  byteAlign = 8;
  type;

  set bytePadding(padding: number) {
    (this.type as unknown as Padded).typePadding = padding
  }

  constructor(type: AlignedType<T>) {
    this.type = type;
    this.byteLength = type.byteLength + 8;
  }

  read(dataView: DataView, byteOffset = 0): T {
    return this.type.read(dataView, byteOffset + 8);
  }

  write(value: T, dataView: DataView, byteOffset = 0) {
    return this.type.write(value, dataView, byteOffset + 8);
  }
}

export const extensible = (
  type: Record<string, SizedType<unknown>>,
) => new Extensible(new AlignedStruct(type));