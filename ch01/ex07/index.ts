export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // 原点からの距離
  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // 引数として渡された Point クラスのインスタンスの座標を自分の座標に加算する
  add(anotherPoint: Point) {
    this.x += anotherPoint.x;
    this.y += anotherPoint.y;
  }
}
