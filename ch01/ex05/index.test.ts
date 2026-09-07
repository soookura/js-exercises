import { abs, sum, factorial } from "./index.ts";
import { describe, it, expect } from "vitest";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("正の整数のみの配列の時、正しく合計値が出力される", () => {
      expect(sum([1, 2, 3])).toBe(6);
    });

    it("負の整数が配列に含まれる時、正しく合計値が出力される", () => {
      expect(sum([1, -2, 3])).toBe(2);
    });

    //浮動小数点演算は誤差がでるため、toBeCloseToを使用
    // https://note.com/fast_owl436/n/nc7736a97aeda
    it("小数が含まれる時、正しく合計値が出力される", () => {
      expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    });

    it("0のみの配列の時、0が出力される", () => {
      expect(sum([0])).toBe(0);
    });

    it("空の配列の時、0が出力される", () => {
      expect(sum([])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("正の整数の時、正しく階乗を返す", () => {
      expect(factorial(4)).toBe(24);
    });

    it("0の時、1を返す", () => {
      expect(factorial(0)).toBe(1);
    });

    it("負の整数の時、undefinedを返す", () => {
      expect(factorial(-1)).toBe(undefined);
    });

    it("正の小数の時、0が出力される", () => {
      expect(sum([0])).toBe(0);
    });
  });
});
