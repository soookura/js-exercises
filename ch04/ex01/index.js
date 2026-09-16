// 振り返り：なし
// const z1 = { re: 2, im: 3 }; // 2+3i
// const z2 = { re: 3, im: 5 }; // 3+5i

const add = function (z1, z2) {
  const re = z1.re + z2.re;
  const im = z1.im + z2.im;
  return { re, im };
};

const sub = function (z1, z2) {
  const re = z1.re - z2.re;
  const im = z1.im - z2.im;
  return { re, im };
};

// メモ：(a+bi)(c+di)=(ac-bd)+(ad+bc)i
const mul = function (z1, z2) {
  const re = z1.re * z2.re - z1.im * z2.im;
  const im = z1.re * z2.im + z1.im * z2.re;
  return { re, im };
};

// メモ：(a+bi)/(c+di)={(ac+bd)+(bc-ad)i}/(c^2+d^2)
// c+di === 0のとき、0/0になりNaN(p30)
const div = function (z1, z2) {
  const re = (z1.re * z2.re + z1.im * z2.im) / (z2.re ** 2 + z2.im ** 2);
  const im = (z1.im * z2.re - z1.re * z2.im) / (z2.re ** 2 + z2.im ** 2);
  return { re, im };
};

export { add, sub, mul, div };
