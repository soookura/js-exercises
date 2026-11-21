import { sequenceToObject } from "./index.js";
import { test, expect } from "vitest";

test("正常系", () => {
  expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
});

test("奇数番目の引数に、string以外があるとエラー", () => {
  expect(() => sequenceToObject("a", 1, 3, 2)).toThrow(TypeError); // number
  expect(() => sequenceToObject("a", 1, true, 2)).toThrow(TypeError); // boolean
  expect(() => sequenceToObject("a", 1, Symbol("b"), 2)).toThrow(TypeError); // symbol
  expect(() => sequenceToObject("a", 1, null, 2)).toThrow(TypeError); // null
  expect(() => sequenceToObject("a", 1, undefined, 2)).toThrow(TypeError); // undefined
  expect(() => sequenceToObject("a", 1, ["b"], 2)).toThrow(TypeError); // Array
  expect(() => sequenceToObject("a", 1, { b: 3 }, 2)).toThrow(TypeError); // Object
  expect(() => sequenceToObject("a", 1, (x) => x ** 2, 2)).toThrow(TypeError); // Function
});

test("引数の数が偶数でない場合はエラー", () => {
  expect(() => sequenceToObject("a", 1, "b")).toThrow(Error);
});

test("引数に何も渡さない場合は、空のオブジェクを返す", () => {
  expect(sequenceToObject()).toEqual({});
});
