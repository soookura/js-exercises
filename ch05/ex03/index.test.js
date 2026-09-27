import { has31DaysIf, has31DaysSwitch } from "./index.js";
import { test, expect } from "vitest";

test.each([
  ["Jan", true],
  ["Feb", false],
  ["Mar", true],
  ["Apr", false],
  ["May", true],
  ["Jun", false],
  ["Jul", true],
  ["Aug", true],
  ["Sep", false],
  ["Oct", true],
  ["Nov", false],
  ["Dec", true],
])("%s", (input, expected) => {
  expect(has31DaysIf(input)).toBe(expected);
  expect(has31DaysSwitch(input)).toBe(expected);
});
