function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

// 危険性
// eval()と同様で、外部から悪意のあるコードを文字列として入力し、実行されてしまう危険性がある。
// 例えば以下のコードの場合、

// node --env-file=ch08/ex13/.env ch08/ex13/index.jsで実行
f("`user password is ${process.env.PASSWORD}`");

// 出力は Hello, user password is 123 となり、認証情報等が抽出できてしまう。
