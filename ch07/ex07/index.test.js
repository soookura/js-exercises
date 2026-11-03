import { selectionSort } from "./index.js";
import { test, expect } from "vitest";

test("比較関数を指定をしない場合は昇順に並ぶ", () => {
  const array = [2, 4, 5, 1, 3];
  expect(selectionSort(array)).toEqual([1, 2, 3, 4, 5]);
  // 既存の配列も変更されている
  expect(array).toEqual([1, 2, 3, 4, 5]);
});

test("比較関数を指定した場合はその関数に従った順序に並ぶ", () => {
  const array = [2, 4, 5, 1, 3];
  const compare = (a, b) => b - a; // 降順に並ばせる
  expect(selectionSort(array, compare)).toEqual([5, 4, 3, 2, 1]);
  expect(array).toEqual([5, 4, 3, 2, 1]);
});

test("arrayが[]の時は[]が返る", () => {
  const array = [];
  expect(selectionSort(array)).toEqual([]);
  expect(array).toEqual([]);
});

test("同じ値を含む場合も正常に動作する", () => {
  const array = [2, 4, 5, 4, 3];
  expect(selectionSort(array)).toEqual([2, 3, 4, 4, 5]);
  expect(array).toEqual([2, 3, 4, 4, 5]);
});
