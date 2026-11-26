export function f(code) {
  const args = Array.from({ length: 10 }, (_, i) => `$${i + 1}`);
  // fの引数が式かブロックかで処理を区別
  if (code[0] === "{") {
    return new Function(...args, `${code};`);
  } else {
    return new Function(...args, `return ${code};`);
  }
}

// メモ
// 引数 $1 ~ $10 を設定できるようにし、f(code)(1,2,3...)で呼び出す際
// 指定されない引数には、undefinedが入り実行される。
