import { fib } from "./index.ts";
import { describe, it, expect } from "vitest";

describe("fib", () => {
  it("引数に1または2を設定した際に、ただし出力される", () => {
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
  });

  it("3以上の任意の整数を引数に設定しても、正しく出力される", () => {
    expect(fib(5)).toBe(5);
    expect(fib(75)).toBe(2111485077978050);
  });

  it("小数、負の数を設定した場合にundefinedが出力される", () => {
    expect(fib(-1)).toBe(undefined);
    expect(fib(0.5)).toBe(undefined);
  });
});
