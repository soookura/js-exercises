const recursivePower = (x, n) => {
  if (n === 1) {
    return x;
  }
  if (n % 2 === 0) {
    // 下のように2回呼んでしまうと、再帰の数が倍に増えていってしまう
    // return recursivePower(x, n / 2) * recursivePower(x, n / 2);
    const half = recursivePower(x, n / 2);
    return half * half;
  } else {
    return x * recursivePower(x, n - 1);
  }
};

// メモ
// n=32の場合：n = 32 → 16 → 8 → 4 → 2 → 1 と変化していき、計算回数はlog₂n程度
// n=11の場合：n = 11 → 10 → 5 → 4 → 2 → 1 と変化していき、計算回数は2log₂n程度

const loopPower = (x, n) => {
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      result = result * x;
    }
    //
    x = x * x;
    n = Math.floor(n / 2);
  }
  return result;
};

// メモ：繰り返し二乗法
// loopPower(2, 10) の場合
// 1: n=10は偶数。
// 次の掛け算には2*2=4を使用し、nは半分の5となる。
// 2^10 = 1 * 4^5

// 2: n=5は奇数。
// 4^5から4を1つ取り出してresultに掛ける（result=4）。
// 次の掛け算には4*4=16を使用し、nは半分の2となる。
// 2^10 = 4 * 16^2

// 3: n=2は偶数。
// 次の掛け算には16*16=256を使用し、nは半分の1となる。
// 2^10 = 4 * 256^1

// 4: n=1は奇数。
// 256をresultに掛ける（result=1024）。
// nは半分の0となり、ループ終了。

// 計算量：ループのたびにnを半分にするため、ループ回数はlog₂n程度となり、O(log₂n)

export { recursivePower, loopPower };
