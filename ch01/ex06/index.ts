// フィボナッチ数列において引数番目の数を算出する関数
// => fib(5) = 5
const fib = (n: number): number | undefined => {
  if (n <= 0 || n % 1 !== 0) {
    return undefined;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let a = 1;
    let b = 1;
    // メモ：(a,b)は(1,1),(1,2),(2,3),(3,5)...と上がっていく
    for (let i = 1; i <= n - 2; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }
};

export { fib };
