import { lineBreakChange } from "./index.ts";
import { describe, it, expect } from "vitest";

describe("改行コードを変換する関数：lineBreakChange", () => {
  it("LFをCRLFに変換できる", () => {
    expect(lineBreakChange("a\nb")).toBe("a\r\nb");
  });

  it("CRLFをLFに変換できる", () => {
    expect(lineBreakChange("a\r\nb")).toBe("a\nb");
  });

  it("改行コードが含まれていない文字列はそのままで返す", () => {
    expect(lineBreakChange("ab")).toBe("ab");
  });
});
