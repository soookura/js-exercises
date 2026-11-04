import { DynamicSizeArray } from "./index.js";
import { beforeEach, test, expect } from "vitest";

let arr;
beforeEach(() => {
  arr = new DynamicSizeArray();
});

test("配列の作成直後は長さが0である", () => {
  expect(arr.length()).toBe(0);
});
test("初期サイズ(4)まで要素を正しく追加できる", () => {
  arr.push(1);
  expect(arr.length()).toBe(1);
  arr.push(2);
  expect(arr.length()).toBe(2);
  arr.push(3);
  expect(arr.length()).toBe(3);
  arr.push(4);
  expect(arr.length()).toBe(4);
  expect(arr.get(0)).toBe(1);
  expect(arr.get(1)).toBe(2);
  expect(arr.get(2)).toBe(3);
  expect(arr.get(3)).toBe(4);
});
test("初期サイズ(4)を超えてpushすると配列が動的に伸び、それまでの要素も失われない", () => {
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(4);
  // 5回目以降のpush
  arr.push(5);
  expect(arr.length()).toBe(5);
  expect(arr.get(0)).toBe(1);
  expect(arr.get(1)).toBe(2);
  expect(arr.get(2)).toBe(3);
  expect(arr.get(3)).toBe(4);
  expect(arr.get(4)).toBe(5);
});
test("追加した要素を正しく取得できる", () => {
  arr.push(1);
  arr.push(2);
  expect(arr.get(0)).toBe(1);
  expect(arr.get(1)).toBe(2);
});
test("配列の範囲外のインデックスを指定してgetすると、undefinedが返る", () => {
  arr.push(1);
  expect(arr.length()).toBe(1);
  expect(arr.get(100)).toBe(undefined);
  expect(arr.get(-1)).toBe(undefined);
});
test("指定したインデックスに要素を新規追加できる", () => {
  arr.set(1, 2);
  expect(arr.length()).toBe(2); // インデックス0は疎になるので、長さは2
  expect(arr.get(1)).toBe(2);
  expect(arr.get(0)).toBe(undefined);
});
test("配列の長さ以上のインデックスを指定しても、要素を新規追加できる", () => {
  arr.set(100, 1);
  expect(arr.length()).toBe(101);
  expect(arr.get(100)).toBe(1);
});
test("負のインデックスを指定し要素を追加しようとした場合は、エラーになる", () => {
  expect(() => {
    arr.set(-1, 2);
  }).toThrow("インデックスは0以上にしてください");
});
test("既に要素があるインデックスを指定しsetすると、要素は置き換えられ長さは変わらない", () => {
  arr.push(1);
  arr.set(0, 2);
  arr.set(0, 3);
  expect(arr.length()).toBe(1);
  expect(arr.get(0)).toBe(3);
});
