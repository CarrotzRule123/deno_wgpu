import { AlignedType, InnerType, SizedType, Struct } from "../../deps.ts";
import { Padded } from "./mod.ts";

export class AlignedStruct<
  T extends Record<string, SizedType<unknown> | AlignedType<unknown>>,
  V extends { [K in keyof T]: InnerType<T[K]> },
> extends Struct<T, V> {
  constructor(
    types: T,
    byteAlign: number = Math.max(
      ...Object.values(types).map((type) =>
        "byteAlign" in type ? type.byteAlign : type.byteLength
      ),
    ),
  ) {
    const typeRecord: Record<
      string,
      [number, SizedType<unknown> | AlignedType<unknown>]
    > = {};
    let byteLength = 0;

    const typeEntries = Object.entries(types);
    for (let index = 0; index < typeEntries.length; index++) {
      const [key, type] = typeEntries[index];
      const typeAlign = "byteAlign" in type ? type.byteAlign : type.byteLength;
      const typePadding = (typeAlign - (byteLength % typeAlign)) %
        typeAlign;
      const typeOffset = byteLength + typePadding;

      (type as unknown as Padded).typePadding = typePadding

      typeRecord[key] = [typeOffset, type];
      byteLength = typeOffset + type.byteLength;
    }

    byteLength = byteLength +
      (byteAlign - (byteLength % byteAlign)) % byteAlign;

    super(
      typeRecord as { [K in keyof T]: [number, T[K]] },
      byteLength,
      byteAlign,
    );
  }

  write(value: V, dataView: DataView, byteOffset = 0) {
    const keys = Object.keys(this.typeRecord);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
      const key = keys[i];
      const [offset, type] = this.typeRecord[key];
      // console.log(key)
      type.write(value[key], dataView, byteOffset + offset);
    }
  }
}

export const struct = (
  types: Record<string, SizedType<unknown>>,
) => new AlignedStruct(types);