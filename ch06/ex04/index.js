// メモ：p142より
// プロパティ属性は「値の変更（writable）」
// 「一覧への列挙（enumerable）」「削除や設定変更（configurable）」の3つ

const object = {};

Object.defineProperty(object, "notWritable", {
  value: 10,
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(object, "notEnumerable", {
  value: 10,
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(object, "notConfigurable", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: false,
});

// プロパティの変更
// object.notWritable = 20; // => TypeError
object.notEnumerable = 20;
object.notConfigurable = 20;
console.log(object.notEnumerable); // => 20
console.log(object.notConfigurable); // => 20

// hasOwnProperty(あるオブジェクトが、指定した名前の独自プロパティを持つか)
console.log(object.hasOwnProperty("notWritable")); // => true
console.log(object.hasOwnProperty("notEnumerable")); // => true
console.log(object.hasOwnProperty("notConfigurable")); // => true

// propertyIsEnumerable(指定した名前のプロパティが独自プロパティで、かつ列挙可属性がtrueの場合true)
console.log(object.propertyIsEnumerable("notWritable")); // => true
console.log(object.propertyIsEnumerable("notEnumerable")); // => false
console.log(object.propertyIsEnumerable("notConfigurable")); // => true

// 削除
delete object.notWritable;
delete object.notEnumerable;
// delete object.notConfigurable; // => TypeError
console.log(object.notWritable); // => undefined
console.log(object.notEnumerable); // => undefined
