import { Point } from "./index.ts";
import { describe, it, expect } from "vitest";

// 引数として渡された Point クラスのインスタンスの座標を自分の座標に加算するメソッド add
describe("Point", () => {
  it("正の座標同士が正しく加算される", () => {
    const p = new Point(1, 2);
    const q = new Point(2, 3);
    p.add(q);
    expect([p.x, p.y]).toEqual([3, 5]);
  });

  it("負の座標同士が正しく加算される", () => {
    const p = new Point(-1, -2);
    const q = new Point(-2, -3);
    p.add(q);
    expect([p.x, p.y]).toEqual([-3, -5]);
  });

  it("正負の座標同士が正しく加算される", () => {
    const p = new Point(1, 2);
    const q = new Point(-2, -3);
    p.add(q);
    expect([p.x, p.y]).toEqual([-1, -1]);
  });
});
