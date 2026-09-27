import { changeIf, changeSwitch } from "./index.js";
import { test, expect } from "vitest";

test.each([
  ["通常文字", "aa", "aa"],
  ["NUL文字", "a\0a", "a\\0a"],
  ["バックスペース", "a\ba", "a\\ba"],
  ["水平タブ", "a\ta", "a\\ta"],
  ["改行", "a\na", "a\\na"],
  ["垂直タブ", "a\va", "a\\va"],
  ["改頁", "a\fa", "a\\fa"],
  ["復帰", "a\ra", "a\\ra"],
  ["二重引用符", 'a"a', 'a\\"a'],
  ["単一引用符", "a'a", "a\\'a"],
  ["バックスラッシュ", "a\\a", "a\\\\a"],
])("%s", (name, input, expected) => {
  expect(changeIf(input)).toBe(expected);
  expect(changeSwitch(input)).toBe(expected);
});

// メモ："%s"は配列の要素が左から順番に入る
