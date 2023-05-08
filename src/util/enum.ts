import { AlignedType, endianess } from "../../deps.ts";

type EnumMap = { [name: string]: number };

export class Enum<T> implements AlignedType<T> {
  byteLength = 4;
  byteAlign = 4;
  map;
  endian;

  constructor(map: EnumMap, endian: boolean = endianess) {
    this.map = map;
    this.endian = endian;
  }

  read(dataView: DataView, byteOffset = 0): T {
    const value = dataView.getUint32(byteOffset, this.endian);
    return this.map[value] as T;
  }

  write(value: T, dataView: DataView, byteOffset = 0) {
    dataView.setUint32(byteOffset, this.map[value as string], this.endian);
    return dataView.buffer;
  }
}

export const enumtype = (map: EnumMap) => new Enum(map)
