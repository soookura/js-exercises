import { returnAllProperty1, returnAllProperty2 } from "./index.js";
import { describe, it, expect } from "vitest";

// テスト用オブジェクト1
// - 継承プロパティ：列挙可能なa、列挙不可なb
// - 独自プロパティ：列挙可能なc、Symbolのd、列挙不可なe
const proto1 = { a: "a" };
Object.defineProperty(proto1, "b", {
  value: "b",
  writable: true,
  enumerable: false,
  configurable: true,
});
const obj1 = Object.create(proto1);
obj1.c = "c";
const symbolD = Symbol("d");
obj1[symbolD] = "d";
Object.defineProperty(obj1, "e", {
  value: "e",
  writable: true,
  enumerable: false,
  configurable: true,
});

// テスト用オブジェクト2
// - 継承プロパティ：列挙可能なa
// - 独自プロパティ：継承と同名の列挙可能なa
const proto2 = { a: "a" };
const obj2 = Object.create(proto2);
obj2.a = "a";

// テスト（確認内容：すべての独自プロパティと列挙可能な継承プロパティのプロパティ名の配列を返す）
describe("returnAllProperty1", () => {
  it("仕様通りの配列を返す", () => {
    expect(returnAllProperty1(obj1)).toEqual(["c", "e", symbolD, "a"]);
  });
  it("同名のプロパティは1回だけ返す", () => {
    expect(returnAllProperty1(obj2)).toEqual(["a"]);
  });
});
describe("returnAllProperty2", () => {
  it("仕様通りの配列を返す", () => {
    expect(returnAllProperty2(obj1)).toEqual(["c", "e", symbolD, "a"]);
  });
  it("同名のプロパティはすべて返す", () => {
    expect(returnAllProperty2(obj2)).toEqual(["a", "a"]);
  });
});
