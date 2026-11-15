import { a, b, c } from "./index.js";
import { vi, test, expect, afterEach } from "vitest";

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers(); // テストが失敗した場合に備え、afterEachの中に移す方がいい
});

test("自然数nと英数文字cを引数にとり、文字cをn回コンソール出力してから文字cをn個含む配列を返す", () => {
  // consoleはグローバルオブジェクトのため、以下のように直接console.log()をスパイできる
  const logSpy = vi.spyOn(console, "log");

  // 返り値の確認
  expect(a(2, "A1")).toEqual(["A1", "A1"]);

  // コンソール出力の確認
  expect(logSpy).toHaveBeenCalledTimes(2);
  expect(logSpy).toHaveBeenNthCalledWith(1, "A1");
  expect(logSpy).toHaveBeenNthCalledWith(2, "A1");
});

test("数値xを引数にとり、xの二乗の数値を返す", () => {
  expect(b(2)).toBe(4);
});

test("引数なしで、現在時刻のプロパティnowを含むオブジェクトを返す", () => {
  vi.useFakeTimers();

  // 現在時刻を2026年12月31日10:00:00に固定する
  const mockDate = new Date("2026-12-31T10:00:00");
  vi.setSystemTime(mockDate);

  expect(c()).toEqual({ now: mockDate });
});
