import { getEvenValues } from "./index.js";
import { test, expect } from "vitest";

test("偶数の値を持つプロパティだけを残したオブジェクトを返し、元のオブジェクトは変更しない", () => {
  const obj = { x: 1, y: 2, z: 3 };
  expect(getEvenValues(obj)).toEqual({ y: 2 });
  expect(obj).toEqual({ x: 1, y: 2, z: 3 });
});
test("負の偶数を持つプロパティがある場合も正常に動作する", () => {
  const obj = { x: 1, y: -2, z: 3 };
  expect(getEvenValues(obj)).toEqual({ y: -2 });
  expect(obj).toEqual({ x: 1, y: -2, z: 3 });
});
test("偶数の値を持つプロパティがない場合は、空オブジェクトを返す", () => {
  const obj = { x: 1, y: 3, z: 5 };
  expect(getEvenValues(obj)).toEqual({});
  expect(obj).toEqual({ x: 1, y: 3, z: 5 });
});
test("0の値を持つプロパティも偶数として返す", () => {
  const obj = { x: 1, y: 0, z: 5 };
  expect(getEvenValues(obj)).toEqual({ y: 0 });
  expect(obj).toEqual({ x: 1, y: 0, z: 5 });
});
test("引数が空オブジェクトの場合、空オブジェクトを返す", () => {
  const obj = {};
  expect(getEvenValues(obj)).toEqual({});
  expect(obj).toEqual({});
});
test("プロパティの値にNaNが含まれる場合も正常に動作する", () => {
  const obj = { x: 1, y: 2, z: NaN };
  expect(getEvenValues(obj)).toEqual({ y: 2 });
  expect(obj).toEqual({ x: 1, y: 2, z: NaN });
});
