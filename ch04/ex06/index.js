// - params には undefined またはオブジェクトが与えられる
// - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する
function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;
  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }
  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }
  console.log({ maxWidth, maxHeight });
}
const params1 = { maxWidth: 300, maxHeight: 500 };
const params2 = {};
resize(); // => { maxWidth: 600, maxHeight: 480 }
resize(params1); // => { maxWidth: 300, maxHeight: 500 }
resize(params2); // => { maxWidth: 600, maxHeight: 480 }

function resize1(params) {
  //メモ：paramsがtrueなら&&右辺のparams.maxWidthが評価、trueならそれが返される、falseなら||右辺の600が返る
  // paramsまたはparams.maxWidthがundefinedなら、 (params && params.maxWidth)がfalseで600が返る
  const maxWidth = (params && params.maxWidth) || 600;
  const maxHeight = (params && params.maxHeight) || 480;
  console.log({ maxWidth, maxHeight });
}
resize1(); // => { maxWidth: 600, maxHeight: 480 }
resize1(params1); // => { maxWidth: 300, maxHeight: 500 }
resize1(params2); // => { maxWidth: 600, maxHeight: 480 }

function resize2(params) {
  const maxWidth = params?.maxWidth ?? 600;
  const maxHeight = params?.maxHeight ?? 480;
  console.log({ maxWidth, maxHeight });
}
resize2(); // => { maxWidth: 600, maxHeight: 480 }
resize2(params1); // => { maxWidth: 300, maxHeight: 500 }
resize2(params2); // => { maxWidth: 600, maxHeight: 480 }
