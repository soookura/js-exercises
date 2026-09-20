import { bitCount } from "./index.js";
import { test, expect } from "vitest";

test("正の数", () => {
  //正の数
  expect(bitCount(0b111)).toBe(3);
  expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
  expect(bitCount(42)).toBe(3); // 00000000000000000000000000101010
});

test("負の数", () => {
  expect(bitCount(-1)).toBe(32); // 11111111111111111111111111111111
  expect(bitCount(-5)).toBe(31); // 11111111111111111111111111111011
});

test("0", () => {
  expect(bitCount(0)).toBe(0);
});

test("32bitを超える数", () => {
  expect(bitCount(0b111111111111111111111111111111111)).toBe(32); //33bit
});
