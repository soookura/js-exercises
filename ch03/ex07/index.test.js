import { equalArrays } from "./index.js";
import { test, expect } from "vitest";

test("ch03-ex07", () => {
  const x = "a"; // ここを変更
  const y = ["a"]; // ここを変更

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});

// 3.9.1より
// 同値演算子（===）は、オペランドの型が異なる場合には等しいと判定しません。
