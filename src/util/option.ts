import { AlignedType } from "../../deps.ts";
import { Padded } from "./mod.ts";

export class OptionType<T> implements AlignedType<T | undefined> {
  byteAlign;
  byteLength;
  type;
  defaultValue;

  set typePadding(padding: number) {
    (this.type as unknown as Padded).typePadding = padding
  }

  constructor(type: AlignedType<T>, defaultValue: T) {
    this.type = type;
    this.byteAlign = type.byteAlign
    this.byteLength = type.byteLength;
    this.defaultValue = defaultValue;
  }

  read(dataView: DataView, byteOffset = 0): T | undefined {
    return this.type.read(dataView, byteOffset);
  }

  write(value: T | undefined, dataView: DataView, byteOffset = 0) {
    if (value != undefined || this.defaultValue) {
      const finalValue = value != undefined ? value : this.defaultValue
      return this.type.write(finalValue, dataView, byteOffset);
    }
  }
}

export const option = <T>(type: AlignedType<T | undefined>, defaultValue: T) =>
  new OptionType(type, defaultValue);