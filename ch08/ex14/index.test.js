import { any, catching } from "./index.js";
import { describe, test, vi, expect } from "vitest";

describe("any", () => {
  test("問題文の実行例が正常に動作する", () => {
    const isNonZero = any(
      (n) => n > 0,
      (n) => n < 0,
    );
    expect(isNonZero(0)).toBe(false);
    expect(isNonZero(42)).toBe(true);
    expect(isNonZero(-0.5)).toBe(true);
  });
  test("引数を渡さない場合はfalseを返す", () => {
    const nonArgs = any();
    expect(nonArgs(1)).toBe(false);
  });
  test("引数に設定する関数が複数の引数を持っている場合も正常に動作する", () => {
    const isNonZero = any(
      (x, y) => x + y > 0,
      (x, y) => x + y < 0,
    );
    expect(isNonZero(0, 0)).toBe(false);
    expect(isNonZero(0, 2)).toBe(true);
    expect(isNonZero(0, -1)).toBe(true);
  });
});

describe("catching", () => {
  test("問題文の実行例が正常に動作する", () => {
    const safeJsonParse = catching(JSON.parse, (e) => {
      return { error: e.toString() };
    });
    expect(safeJsonParse('{"a": 1}')).toEqual({ a: 1 });
    expect(safeJsonParse("{Invalid Json}")).toEqual({
      error: expect.any(String),
    });
  });
  test("例外が発生しない場合、第二引数の関数は実行されないか", () => {
    const errorHandler = vi.fn((e) => {
      return { error: e.toString() };
    });
    const safeJsonParse = catching(JSON.parse, errorHandler);
    safeJsonParse('{"a": 1}');
    expect(errorHandler).not.toHaveBeenCalled();
  });
});
