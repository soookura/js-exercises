export const bitCount = function (n) {
  // >>> で符号なし32ビットの整数表現に変更することで
  // 負の数なども2進数で表現する際に2の補数表現で表すことができる（参考：p85, p51）
  const binary = (n >>> 0).toString(2);
  let count = 0;
  for (const number of binary) {
    if (number === "1") {
      count++;
    }
  }
  return count;
};

// 以下AIに回答聞いた結果
// export const bitCount = function (n) {
//   let count = 0;
//   for (let i = 0; i < 32; i++) {
//     count += n & 1;
//     n >>>= 1;
//   }
//   return count;
// };
