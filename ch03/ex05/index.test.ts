import { lfToCrlf, CrlfToLf } from "./index.ts";
import { describe, it, expect } from "vitest";

describe("改行コードを変換", () => {
  it("LFをCRLFに変換できる", () => {
    expect(lfToCrlf("a\nb")).toBe("a\r\nb");
  });

  it("CRLFをLFに変換できる", () => {
    expect(CrlfToLf("a\r\nb")).toBe("a\nb");
  });

  it("改行コードが含まれていない文字列はそのままで返す", () => {
    expect(lfToCrlf("ab")).toBe("ab");
    expect(CrlfToLf("ab")).toBe("ab");
  });
});
