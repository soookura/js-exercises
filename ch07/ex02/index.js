function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzbuzz_new(n) {
  // 要素が1~nまでの配列を作成
  // // メモ：lengthプロパティを設定することで、配列のようなオブジェクトを作成することで、Array.fromの第一引数に渡す(p194)
  // const numbers = Array.from({ length: n }, (_, i) => i + 1);

  // 要素が1~nまでの配列を作成
  const numbersWith0 = new Array(n).fill(0); // new Array()だけでは疎な配列なので、fill()で0で埋める
  const numbers = numbersWith0.map((_, i) => i + 1);

  const numbersWithFizzbuzz = numbers.map((x) =>
    x % 15 === 0 ? "FizzBuzz" : x % 3 === 0 ? "Fizz" : x % 5 === 0 ? "Buzz" : x,
  );

  numbersWithFizzbuzz.forEach((value) => {
    console.log(value);
  });
}

fizzbuzz(20);
// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;
// 11;
// Fizz;
// 13;
// 14;
// FizzBuzz;
// 16;
// 17;
// Fizz;
// 19;
// Buzz;
fizzbuzz_new(20);
// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;
// 11;
// Fizz;
// 13;
// 14;
// FizzBuzz;
// 16;
// 17;
// Fizz;
// 19;
// Buzz;

// --------------------------------------------------------------------

// 対応する要素同士の差の2乗の合計を出す
function sumOfSquaredDifference(f, g) {
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    result += (f[i] - g[i]) ** 2;
  }
  return result;
}
function sumOfSquaredDifference_new(f, g) {
  const squaredDifferences = f.map((value, index) => (value - g[index]) ** 2);
  return squaredDifferences.reduce(
    (sum, squaredDifference) => sum + squaredDifference,
    0,
  ); // 7.8.1.6参考
}
console.log(sumOfSquaredDifference([1, 2], [3, 4])); // => 8
console.log(sumOfSquaredDifference_new([1, 2], [3, 4])); // => 8

// --------------------------------------------------------------------------

// 配列内の要素の偶数だけの和を求め、42以上かを判定する
function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      continue;
    }
    sum += array[i];
  }
  return sum >= 42;
}
function sumOfEvensIsLargerThan42_new(array) {
  const evens = array.filter((value) => value % 2 === 0);
  const sumOfEvens = evens.reduce((sum, even) => sum + even, 0);
  return sumOfEvens >= 42;
}
console.log(sumOfEvensIsLargerThan42([1, 2, 3, 4])); // => false
console.log(sumOfEvensIsLargerThan42([1, 20, 3, 40])); // => true
console.log(sumOfEvensIsLargerThan42_new([1, 2, 3, 4])); // => false
console.log(sumOfEvensIsLargerThan42_new([1, 20, 3, 40])); // => true
