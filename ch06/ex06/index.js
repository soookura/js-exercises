export const returnAllProperty1 = function (obj) {
  // 1. まず独自プロパティから
  // メモ：Reflect.ownKeys()は、列挙可/不可、文字列/Symbolに関わらず、すべての独自プロパティ名を配列で返す(p155)
  const arr = Reflect.ownKeys(obj);

  // 2. 次に継承プロパティ
  // メモ：for/in文は、列挙可な独自/継承プロパティ1つにつき、一度ループ本体を実行、Symbolは含まれない(p154)
  for (const key in obj) {
    // 継承プロパティの場合のみ追加
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
};

// 上記の関数では、同名のプロパティが独自/継承にあった場合に、継承のほうが配列に追加されない(p156)
export const returnAllProperty2 = function (obj) {
  // 1. まず独自プロパティから
  const arr = Reflect.ownKeys(obj);

  // 2. 次に継承プロパティ
  let proto = Object.getPrototypeOf(obj); // 1段上のプロトタイプ
  // プロトがnullになるまで、列挙可能な継承プロパティのプロパティ名を追加していく
  while (proto !== null) {
    for (const key of Object.keys(proto)) {
      arr.push(key);
    }
    proto = Object.getPrototypeOf(proto);
  }
  return arr;
};
