import { obj } from "./index.js";
import { describe, it, expect, beforeEach } from "vitest";

beforeEach(() => {
  obj.r = Math.SQRT2;
  obj.theta = Math.PI / 4; // (x,y)=(1,1)
});

describe("getter", () => {
  it("(r, θ)が正のとき、x,yを正しく取得できる", () => {
    obj.r = 2;
    obj.theta = Math.PI / 6;
    expect(obj.x).toBeCloseTo(Math.sqrt(3));
    expect(obj.y).toBeCloseTo(1);
  });
  it("(r, θ) = (0, 0)のとき、(x,y)=(0,0)になる", () => {
    obj.r = 0;
    obj.theta = 0;
    expect(obj.x).toBeCloseTo(0);
    expect(obj.y).toBeCloseTo(0);
  });
  it("rが負のとき、x,yを正しく取得できる", () => {
    obj.r = -1;
    obj.theta = 0;
    expect(obj.x).toBeCloseTo(-1);
    expect(obj.y).toBeCloseTo(0);
  });
  it("θが負のとき、x,yを正しく取得できる", () => {
    obj.r = 2;
    obj.theta = -Math.PI / 6;
    expect(obj.x).toBeCloseTo(Math.sqrt(3));
    expect(obj.y).toBeCloseTo(-1);
  });
});

describe("setter", () => {
  it("xを正の値に更新すると、r,θが正しく更新される", () => {
    obj.x = Math.sqrt(3); // (x,y)=(√3,1)
    expect(obj.y).toBeCloseTo(1); // yは変わらない
    expect(obj.r).toBeCloseTo(2);
    expect(obj.theta).toBeCloseTo(Math.PI / 6);
  });
  it("xを負の値に更新すると、r,θが正しく更新される", () => {
    obj.x = -Math.sqrt(3); // (x,y)=(-√3,1)
    expect(obj.y).toBeCloseTo(1);
    expect(obj.r).toBeCloseTo(2);
    expect(obj.theta).toBeCloseTo((5 * Math.PI) / 6);
  });
  it("xを0に更新すると、r,θが正しく更新される", () => {
    obj.x = 0; // (x,y)=(0,1)
    expect(obj.y).toBeCloseTo(1);
    expect(obj.r).toBeCloseTo(1);
    expect(obj.theta).toBeCloseTo(Math.PI / 2);
  });
  it("xをNaNに更新すると、エラーがでる", () => {
    expect(() => {
      obj.x = NaN;
    }).toThrow("x must not be NaN");
  });
  it("yを正の値に更新すると、r,θが正しく更新される", () => {
    obj.y = Math.sqrt(3); // (x,y)=(1,√3)
    expect(obj.x).toBeCloseTo(1);
    expect(obj.r).toBeCloseTo(2);
    expect(obj.theta).toBeCloseTo(Math.PI / 3);
  });
  it("yを負の値に更新すると、r,θが正しく更新される", () => {
    obj.y = -Math.sqrt(3); // (x,y)=(1,-√3)
    expect(obj.x).toBeCloseTo(1);
    expect(obj.r).toBeCloseTo(2);
    expect(obj.theta).toBeCloseTo(-Math.PI / 3);
  });
  it("yを0に更新すると、r,θが正しく更新される", () => {
    obj.y = 0; // (x,y)=(1,0)
    expect(obj.x).toBeCloseTo(1);
    expect(obj.r).toBeCloseTo(1);
    expect(obj.theta).toBeCloseTo(0);
  });
  it("yをNaNに更新すると、エラーがでる", () => {
    expect(() => {
      obj.y = NaN;
    }).toThrow("y must not be NaN");
  });
});
