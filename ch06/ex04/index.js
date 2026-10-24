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

//  参考書の書き方では、no-prototype-builtinsでlintエラーが出るため、以下の書き方で統一する
// hasOwnProperty(あるオブジェクトが、指定した名前の独自プロパティを持つか)
console.log(Object.prototype.hasOwnProperty.call(object, "notWritable")); // => true
console.log(Object.prototype.hasOwnProperty.call(object, "notEnumerable")); // => true
console.log(Object.prototype.hasOwnProperty.call(object, "notConfigurable")); // => true

// propertyIsEnumerable(指定した名前のプロパティが独自プロパティで、かつ列挙可属性がtrueの場合true)
console.log(Object.prototype.propertyIsEnumerable.call(object, "notWritable")); // => true
console.log(
  Object.prototype.propertyIsEnumerable.call(object, "notEnumerable"),
); // => false
console.log(
  Object.prototype.propertyIsEnumerable.call(object, "notConfigurable"),
); // => true

// 削除
delete object.notWritable;
delete object.notEnumerable;
// delete object.notConfigurable; // => TypeError
console.log(object.notWritable); // => undefined
console.log(object.notEnumerable); // => undefined
