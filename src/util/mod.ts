import { ArrayType, SizedType } from "../../deps.ts";

export { u64 } from "./u64.ts";
export { arrayptr } from "./arrayptr.ts";
export { pointer } from "./pointer.ts";
export { option } from "./option.ts";
export { enumtype } from "./enum.ts";
export { struct } from "./struct.ts";
export { extensible } from "./extensible.ts";
export { objptr } from "./objptr.ts";
export { cstring } from "./strptr.ts";

export const array = <T>(type: SizedType<T>, length: number) =>
  new ArrayType(type, length);

// deno-lint-ignore no-explicit-any
export const ptr = <T>(type: SizedType<T>, value: T | any) => {
  const buffer = new ArrayBuffer(type.byteLength);
  type.write(value, new DataView(buffer));
  return Deno.UnsafePointer.of(buffer);
};

// deno-lint-ignore no-explicit-any
export const buf = <T>(type: SizedType<T>, value: T | any) => {
  const buffer = new ArrayBuffer(type.byteLength);
  type.write(value, new DataView(buffer));
  return new Uint8Array(buffer);
};

export type Padded = {
  typePadding: number;
};
