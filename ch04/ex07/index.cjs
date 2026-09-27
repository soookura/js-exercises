// このような関数は絶対に書いてはならない。
function set42(key) {
  // `hello=42;`という文字列が出来上がり、その中身が実行される
  // helloを変数宣言していないので、新たなglobal変数として生成される。
  eval(`${key} = 42;`);
}

// node --env-file=ch04/ex07/.env  ch04/ex07/index.cjsで実行
// xへの代入の前に環境変数を引き出す
set42("console.log(process.env.PASSWORD); x");
