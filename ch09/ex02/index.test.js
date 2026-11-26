import { C } from "./index.js"; // ts でも可
import { test, expect } from "vitest";

test("", () => {
  const c = new C();
  expect(c.x).toBe(0);
  expect(c.x).toBe(1);
  expect(c.x).toBe(2);
});
