import { describe, it, expect } from "vitest";

describe("Hundred Points Symbol:💯", () => {
  it("length の値を確認", () => {
    expect("💯".length).toBe(2);
  });

  it("utf-16 コードポイント表現", () => {
    expect("💯").toBe("\uD83D\uDCAF");
  });

  it("utf-32 コードポイント表現", () => {
    expect("💯").toBe("\u{0001F4AF}");
  });
});
