// 自然数nと英数文字cを引数にとり、文字cをn回コンソール出力してから文字cをn個含む配列を返す
// 引数が複数、関数本体もreturn文だけではないため、括弧は省略不可
const a = (n, c) => {
  for (let i = 0; i < n; i++) {
    console.log(c);
  }
  return new Array(n).fill(c);
};

// 数値xを引数にとり、xの二乗の数値を返す
// 引数が1つのため省略可能、関数本体もreturn文のみで表現できるので省略可能
// prettier-ignore
const b = x => x ** 2;

// 引数なしで、現在時刻のプロパティnowを含むオブジェクトを返す
// 引数がない場合は括弧の省略不可、戻り値がオブジェクトの場合はオブジェクトを丸括弧で囲む必要がある
const c = () => ({ now: new Date() });

export { a, b, c };
