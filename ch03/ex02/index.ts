console.log(Number.MAX_VALUE); // => 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // => 5e-324
console.log(Number.MAX_VALUE + 1); // => 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // => true

// console.log(Number.MAX_VALUE + 1e291 === Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 1e292 === Number.MAX_VALUE);

// trueの理由
//：Number.MAX_VALUEは、1.7976931348623157e+308より、有効数字は17桁(小数第16位まで表現可能)
// 小数第16位の7→8にあげ、Infinityにするためには、0.0000000000000001e+308 = 1.0e+292以上である必要があるため
// それ以下の1, 2を足しても同じ値とされる。
