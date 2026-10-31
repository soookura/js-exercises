// row*colで中身がundefinedの行列を作る関数
function makeMatrix(row, col) {
  const matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  return matrix;
}

// 行列として有効な形式か検証し、行数と列数を返す
// 以下メモ：引数としてOKな例
// - [[1,2],[3,4]]
// NGな例
// - 1：二次元配列として無効
// - []：二次元配列として無効
// - [1,2]：二次元配列として無効
// - [[]]：二次元配列が空
// - [[],[]]：二次元配列が空
// - [[],1,2]：各行の長さが違う
// - [[1],[1,2]]：各行の長さが違う
function getSize(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    throw Error("二次元配列として無効です");
  }
  if (matrix.every((arr) => arr.length === 0)) {
    throw Error("二次元配列が空です");
  }
  if (matrix.some((arr) => arr.length !== matrix[0].length)) {
    throw Error("全ての行の長さが同じである必要がある");
  }
  return { rows: matrix.length, cols: matrix[0].length };
}

export function add(a, b) {
  const { rows: rowsA, cols: colsA } = getSize(a);
  const { rows: rowsB, cols: colsB } = getSize(b);
  // 加算ではa,bのサイズが同じ必要がある
  if (rowsA !== rowsB || colsA !== colsB) {
    throw Error("二つの行列はサイズが同じ必要がある");
  }
  // 加算
  const result = makeMatrix(rowsA, colsA);
  for (let row = 0; row < rowsA; row++) {
    for (let col = 0; col < colsA; col++) {
      result[row][col] = a[row][col] + b[row][col];
    }
  }
  return result;
}

export function mul(a, b) {
  const { rows: rowsA, cols: colsA } = getSize(a);
  const { rows: rowsB, cols: colsB } = getSize(b);
  // 乗算ではaの列数とbの行数が同じ必要がある
  if (colsA !== rowsB) {
    throw Error("第一引数の列数と第二引数の行数が同じ必要がある");
  }
  // 乗算
  const result = makeMatrix(rowsA, colsB);
  for (let row = 0; row < rowsA; row++) {
    for (let col = 0; col < colsB; col++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[row][k] * b[k][col];
      }
      result[row][col] = sum;
    }
  }
  return result;
}
