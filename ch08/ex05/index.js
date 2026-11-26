export function sequenceToObject(...values) {
  // 以下がなくてもfor文が走らず空オブジェクトを返してくれる
  // if (values.length === 0) {
  //   return {};
  // }
  if (values.length % 2 === 1) {
    throw new Error("引数の数は偶数個の必要があります");
  }
  const oddValues = values.filter((_x, i) => i % 2 === 0);
  const hasNotString = oddValues.some((x) => typeof x !== "string");
  if (hasNotString) {
    throw new TypeError("奇数番目の引数はstringの必要があります");
  }
  const obj = {};
  for (let i = 0; i < values.length; i += 2) {
    const key = values[i];
    const value = values[i + 1];
    obj[key] = value;
  }
  return obj;
}

// AIメモ：奇数番目がstringかどうかはfor文の中で処理すれば、余計なメソッドを使う必要がない
