import { equal } from "./index.ts";
import { describe, it, expect } from "vitest";

describe("equal", () => {
  it("同値の整数を引数に取る場合trueを返す", () => {
    expect(equal(10, 10)).toBe(true);
    expect(equal(-10, -10)).toBe(true);
  });

  it("異なる整数を引数に取る場合falseを返す", () => {
    expect(equal(10, 11)).toBe(false);
    expect(equal(-10, -11)).toBe(false);
  });

  it("同値の小数を引数に取る場合trueを返す", () => {
    expect(equal(1.2, 1.2)).toBe(true);
    expect(equal(-1.2, -1.2)).toBe(true);
  });

  it("異なる小数を引数に取る場合falseを返す", () => {
    expect(equal(1.2, 1.3)).toBe(false);
    expect(equal(-1.2, -1.3)).toBe(false);
  });

  it("誤差が10^(-10)未満であればtrueを返す", () => {
    expect(equal(0.3 - 0.2, 0.1)).toBe(true);
    expect(equal(0.2 - 0.1, 0.1)).toBe(true);
  });

  it("誤差が10^(-10)以上であればfalseを返す", () => {
    expect(equal(0.3, 0.1 + 0.2 + 1e-9)).toBe(false);
    expect(equal(0.5, 0.1 + 0.4 + 1e-9)).toBe(false);
  });
});
