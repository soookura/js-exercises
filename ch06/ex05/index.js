// プロトタイプ
const proto = { 1: "number", str1: "string", enumerable: "enumerable" };

// 上を継承したオブジェクト
const obj = Object.create(proto);
obj[1] = "changed_number";
obj[2] = "new_number";
obj.str1 = "changed_string";
obj.str2 = "new_string";
Object.defineProperty(obj, "enumerable", {
  value: "changed_enumerable",
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(obj);

// for/inループ検証
for (const key in obj) {
  console.log(obj[key]);
}
// 検証結果
// changed_number;
// new_number;
// changed_string;
// new_string;

// 解説(p155, 156)
// - プロパティ名が非負の整数のものが最初に列挙され、その順番は値が小さいものから
// - 数値の次にプロパティ名が文字列のプロパティが列挙され、その順番は追加した順
// - 独自プロパティ => プロトタイプのプロパティの順で列挙するが、同じ名前のプロパティが既に
// 列挙されていた場合は、そのプロパティは列挙されません
// - 同じ名前の独自プロパティが列挙不可で列挙されていなかった場合、プロトの同盟プロパティも列挙されません
