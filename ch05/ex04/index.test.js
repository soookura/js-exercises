import { fibWhile, fibDoWhile, fibFor } from "./index.js";
import { test, expect } from "vitest";

const expectedArrays = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

test("while 文", () => {
  expect(fibWhile()).toEqual(expectedArrays);
});
test("do/while 文", () => {
  expect(fibDoWhile()).toEqual(expectedArrays);
});
test("for 文", () => {
  expect(fibFor()).toEqual(expectedArrays);
});
