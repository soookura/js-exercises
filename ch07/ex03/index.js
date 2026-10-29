function sum(arr = []) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function join(arr, sep = ",") {
  return arr.reduce(
    (acc, cur, index) =>
      index === arr.length - 1
        ? `${acc}${cur ?? ""}`
        : `${acc}${cur ?? ""}${sep}`,
    "", // arr=[]の時は""を返す
  );
}

function reverse(arr) {
  return arr.reduce((acc, cur) => [cur, ...acc], []);
}

function every(arr, func) {
  return arr.reduce((acc, cur, index) => acc && func(cur, index, arr), true);
}

function some(arr, func) {
  return arr.reduce((acc, cur, index) => acc || func(cur, index, arr), false);
}

export { sum, join, reverse, every, some };

// メモ：reduce の初期値の有無による違い（例：[1, 2, 3].reduce(f, 初期値)）
// - 初期値あり：最初の acc = 初期値、cur = 1（index 0 から始まる）
// - 初期値なし：最初の acc = 1、cur = 2（index 1 から始まる）
// - 空配列の場合、初期値ありなら初期値がそのまま返る。初期値なしだと TypeError
