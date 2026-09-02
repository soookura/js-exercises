let x = Symbol("key");
let y = Symbol("key");
let obj = {};
obj[x] = 1;
obj[y] = 2;
console.log(obj[x]);
console.log(obj[y]);
// => 1, 2

x = Symbol.for("key");
y = Symbol.for("key");
obj = {};
obj[x] = 1;
obj[y] = 2;
console.log(obj[x]);
console.log(obj[y]);
// => 2, 2
