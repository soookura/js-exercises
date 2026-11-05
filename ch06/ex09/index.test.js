import { vi, test, expect } from "vitest";
const mock = vi.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

// ここに１行のコードを書く
// prettier-ignore
obj.toJSON = function () { return { x: this.x, y: this.y, sum: this.sum() }; };

obj.x = 1;
obj.y = 2;
//  No test suite found とエラー出たため、testブロックだけ追加しています
test("ch06/ex09", () => {
  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();
});
