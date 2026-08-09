#　内容1

for-of の中身が `for (const x of array)` でないと lint に怒られるのはなぜか、
`let x of array` ではダメなのかを聞きました。

## 回答

- `prefer-const` は「宣言後に一度も再代入されない変数は const にせよ」というルール。
- for-of は反復ごとに新しい束縛を作り直す仕様なので、ループ変数は再代入されていない扱いになる。よって `let` である必要がなく、ルールが反応する。
- 一方 `for (let i = 0; i < n; i++)` は `i++` が再代入なので `let` が必須。
  ループ本体で `x = x * 2` のように代入し直す場合も `let` でよい。
- `let x of array` は JavaScript の文法としては合法で、動作も変わらない。あくまでスタイル上のルール。
- 参考: https://eslint.org/docs/latest/rules/prefer-const

# 内容2

- factorial関数を実装時、小数の表現方法を聞きました
