// p149元コード
let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;

// 1: o が p および q のプロトタイプチェーン上に存在すること
console.log(o.isPrototypeOf(p)); // => true
console.log(o.isPrototypeOf(q)); // => true

// 2: p が q のプロトタイプチェーン上に存在すること
console.log(p.isPrototypeOf(q)); // => true

// 3: また同様に、Object, Array, Date, Mapのプロトタイプチェーンの継承関係を確認するためのコードも書きなさい
// Object
const obj = new Object();
console.log(Object.prototype.isPrototypeOf(obj)); // => true

// Array
const arr = [];
console.log(Object.prototype.isPrototypeOf(arr)); // => true
console.log(Array.prototype.isPrototypeOf(arr)); // => true
console.log(Object.prototype.isPrototypeOf(Array.prototype)); // => true
console.log(Array.prototype.isPrototypeOf(Object.prototype)); // => false

// Date
const date = new Date();
console.log(Object.prototype.isPrototypeOf(date)); // => true
console.log(Date.prototype.isPrototypeOf(date)); // => true
console.log(Object.prototype.isPrototypeOf(Date.prototype)); // => true
console.log(Date.prototype.isPrototypeOf(Object.prototype)); // => false

// Map
const map = new Map();
console.log(Object.prototype.isPrototypeOf(map)); // => true
console.log(Map.prototype.isPrototypeOf(map)); // => true
console.log(Object.prototype.isPrototypeOf(Map.prototype)); // => true
console.log(Map.prototype.isPrototypeOf(Object.prototype)); // => false
