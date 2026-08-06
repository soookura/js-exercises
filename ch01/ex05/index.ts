//  絶対値を出力する関数
const abs = (x: number): number => {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
};

// 合計値を出力する関数
const sum = (array: number[]): number => {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
};

// 階乗を出力する関数
// n=4の時、①product = 1*4 ②product = 4*3 ③product = 12*2 でストップ
const factorial = (n: number): number => {
  let product = 1;
  while (n > 1) {
    product *= n; //product = product * n
    n--;
  }
  return product;
};

export { abs, sum, factorial };
