// 第一段階
// const fizzbuzz = (): string => {
//   let result = "";
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       result += "FizzBuzz\n";
//     } else if (i % 5 === 0) {
//       result += "Buzz\n";
//     } else if (i % 3 === 0) {
//       result += "Fizz\n";
//     } else {
//       result += `${i}\n`;
//     }
//   }
//   return result;
// };

// 第二段階
// const fizzbuzz = () => {
//   const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
//   const numbersWithFizzbuzz = numbers.map((x) =>
//     x % 15 === 0
//       ? "FizzBuzz\n"
//       : x % 5 === 0
//       ? "Buzz\n"
//       : x % 3 === 0
//       ? "Fizz\n"
//       : `${x}\n`,
//   );
//   return numbersWithFizzbuzz.join("");
// };

// 提出用
// prettier-ignore
const fizzbuzz = (): string => { return ((Array.from({ length: 100 }, (_, i) => i + 1)).map((x) => x % 15 === 0 ? "FizzBuzz\n" : (x % 5 === 0 ? "Buzz\n" : (x % 3 === 0 ? "Fizz\n" : `${x}\n`)))).join("") };

export { fizzbuzz };

// const result = fizzbuzz();
// console.log(result);
