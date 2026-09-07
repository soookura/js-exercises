const obj1 = { x: 1 };
// 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
obj1.y = 2;
console.log(obj1);

const obj2 = { x: 1, y: 2 };
// 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい
// 予想: false、オブジェクトの参照が異なる。同じプロパティを持ち、プロパティの値が同じだったとしても、異なる2つのオブジェクトは等しいとは判定されません。(p47引用)
console.log(obj1 === obj2); //=> false

// 2つのオブジェクト o1 と o2 を比較する関数
export function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || typeof o1 !== "object") return false;
  if (o2 === null || typeof o2 !== "object") return false;
  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);

  // プロパティの数を比較
  if (o1Keys.length !== o2Keys.length) return false;
  // プロパティ名の一致を比較（プロパティの順番の違いは許容）
  // o1の各キーに対応するo2のプロパティの値が存在するかでキーの一致を判定
  for (let i = 0; i < o1Keys.length; i++) {
    const o1Key = o1Keys[i];
    if (!o2[o1Key]) return false;
  }

  // メモ；この時点で、{x:1, y:2} {x:1, y:3}などががここまで到達

  // プロパティの各値を equals で再帰的に比較
  // 1: equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})
  // 2: equals({y: {z: 10}}, {y: {z: 10}})
  // 3: equals({z: 10}, {z: 10})
  // 4: equals(10, 10) // => (o1 === o2)でtrue
  for (const key of o1Keys) {
    if (!equals(o1[key], o2[key])) return false;
  }
  return true;
}

// 挙動確認
// const obj = { x: { y: { z: 10 } } };
// console.log(Object.keys(obj)); // => ["x"]
