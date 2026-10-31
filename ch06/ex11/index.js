export const obj = {
  r: 0,
  theta: 0,

  // デカルトx座標
  get x() {
    return this.r * Math.cos(this.theta);
  },
  set x(newValue) {
    if (Number.isNaN(newValue)) {
      throw Error("x must not be NaN");
    }
    const y = this.y;
    this.r = Math.hypot(newValue, y);
    this.theta = Math.atan2(y, newValue);
  },

  // デカルトy座標
  get y() {
    return this.r * Math.sin(this.theta);
  },
  set y(newValue) {
    if (Number.isNaN(newValue)) {
      throw Error("y must not be NaN");
    }
    const x = this.x;
    this.r = Math.hypot(x, newValue);
    this.theta = Math.atan2(newValue, x);
  },
};

// メモ
// Math.hypot(x, y): 点(x, y)の原点からの距離
// Math.atan2(y, x): 点(x, y)を極座標で表したときの角度(ラジアン)、範囲は -π 〜 π（-180° 〜 180°）

// 実装に関するメモ;
// const y = this.y;
// this.r = Math.hypot(newValue, y);
// this.theta = Math.atan2(y, newValue);
// 上のコードを;
// this.r = Math.hypot(newValue, this.y);
// this.theta = Math.atan2(this.y, newValue);
// としてしまうと、theta導出の中でyのgetterが呼び出される際、更新されたrを使用し、yが計算されてしまい、this.y=1.41(1ではない)になってしまう
