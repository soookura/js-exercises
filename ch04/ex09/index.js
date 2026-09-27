// 予想（p102表4-3より）
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof { a: 1 }); // => "object"
console.log(typeof NaN); // => "number"
console.log(typeof 1); // => "number"
console.log(
  typeof function () {
    return 0;
  },
); // => "function"

// 出力結果↓：予想通りでした
// undefined
// object
// object
// number
// number
// function
