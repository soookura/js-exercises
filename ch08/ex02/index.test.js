import { recursivePower, loopPower } from "./index.js";
import { describe, test, expect } from "vitest";

describe("recursivePower", () => {
  test("奇数乗", () => {
    expect(recursivePower(2, 7)).toBe(128);
    expect(recursivePower(3, 5)).toBe(243);
  });
  test("偶数乗", () => {
    expect(recursivePower(2, 6)).toBe(64);
    expect(recursivePower(3, 4)).toBe(81);
  });
});

describe("loopPower", () => {
  test("奇数乗", () => {
    expect(loopPower(2, 7)).toBe(128);
    expect(loopPower(3, 5)).toBe(243);
  });
  test("偶数乗", () => {
    expect(loopPower(2, 6)).toBe(64);
    expect(loopPower(3, 4)).toBe(81);
  });
});
