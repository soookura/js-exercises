import { add, sub, mul, div } from "./index.js";
import { test, expect } from "vitest";

// オブジェクトリテラル同士の比較はtoEqual

test("add", () => {
  //通常計算
  expect(add({ re: 2, im: 3 }, { re: 3, im: 5 })).toEqual({ re: 5, im: 8 });

  //実部のみ
  expect(add({ re: 1, im: 0 }, { re: 2, im: 0 })).toEqual({ re: 3, im: 0 });

  //虚部のみ
  expect(add({ re: 0, im: 6 }, { re: 0, im: 7 })).toEqual({ re: 0, im: 13 });

  //負の値
  expect(add({ re: -2, im: -3 }, { re: -3, im: -5 })).toEqual({
    re: -5,
    im: -8,
  });
});

test("sub", () => {
  //通常計算
  expect(sub({ re: 3, im: 5 }, { re: 2, im: 3 })).toEqual({ re: 1, im: 2 });

  //実部のみ
  expect(sub({ re: 2, im: 0 }, { re: 1, im: 0 })).toEqual({ re: 1, im: 0 });

  //虚部のみ
  expect(sub({ re: 0, im: 7 }, { re: 0, im: 6 })).toEqual({ re: 0, im: 1 });

  //負の値
  expect(sub({ re: -2, im: -3 }, { re: -3, im: -5 })).toEqual({ re: 1, im: 2 });
});

test("mul", () => {
  // 通常計算
  expect(mul({ re: 2, im: 3 }, { re: 3, im: 5 })).toEqual({ re: -9, im: 19 });

  // 実部のみ
  expect(mul({ re: 1, im: 0 }, { re: 2, im: 0 })).toEqual({ re: 2, im: 0 });

  // 虚部のみ
  expect(mul({ re: 0, im: 6 }, { re: 0, im: 7 })).toEqual({ re: -42, im: 0 });

  // 負の値
  expect(mul({ re: -2, im: -3 }, { re: -4, im: -5 })).toEqual({
    re: -7,
    im: 22,
  });
});

test("div", () => {
  // 通常計算
  // メモ：(a+bi)/(c+di)={(ac+bd)+(bc-ad)i}/(c^2+d^2)
  expect(div({ re: 2, im: 4 }, { re: 1, im: 1 })).toEqual({ re: 3, im: 1 });

  // 実部のみ
  expect(div({ re: 1, im: 0 }, { re: 2, im: 0 })).toEqual({ re: 1 / 2, im: 0 });

  // 虚部のみ
  expect(div({ re: 0, im: 6 }, { re: 0, im: 7 })).toEqual({ re: 6 / 7, im: 0 });

  // 負の値
  expect(div({ re: -3, im: -4 }, { re: -2, im: -1 })).toEqual({ re: 2, im: 1 });

  //0除算
  expect(div({ re: 2, im: 3 }, { re: 0, im: 0 })).toEqual({ re: NaN, im: NaN });
});
