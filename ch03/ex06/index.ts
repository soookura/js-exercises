export function slice(
  str: string,
  indexStart?: number,
  indexEnd?: number,
): string {
  let result = "";
  // indexStart が省略、undefined、数値に変換できない場合0
  // indexStartが負の場合、部分文字列は max(indexStart + str.length, 0) から始まる
  // （hello[-2] = hello[5-2] = hello[3]）
  // 小数は切捨て（実際の挙動から確認）
  const start = !(indexStart === undefined || Number.isNaN(indexStart))
    ? indexStart >= 0
      ? Math.trunc(indexStart) //切捨て
      : Math.max(Math.trunc(indexStart + str.length), 0)
    : 0;

  // indexEnd が省略、undefined、indexEnd >= str.length の場合、slice() は文字列の末尾まで抽出
  // indexEndが負の場合：部分文字列は max(indexEnd + str.length, 0) で終わる
  // 同じく小数切捨て
  const end = !(indexEnd === undefined || indexEnd >= str.length)
    ? indexEnd >= 0
      ? Math.trunc(indexEnd)
      : Math.max(Math.trunc(indexEnd + str.length), 0)
    : str.length;

  // indexStart >= str.length の場合、indexEnd <= indexStart である場合は空文字列（indexEndがNaNの場合の仕様は実際の挙動から導出）
  if (start >= str.length || Number.isNaN(end) || end <= start) {
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    if (i >= start && i < end) {
      result += str[i];
    }
  }
  return result;
}
