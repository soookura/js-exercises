// ==
// p87: 4.9.1.2 型変換を伴う等値演算子を参照
// typeofの使用方法はp101, 102, instanceofの使用方法はp90を参照
export function eq(a, b) {
  if (a === b) return true;

  // どちらか一方の値がnullで他方がundefinedの場合、等しい
  if ((a === undefined && b === null) || (a === null && b === undefined))
    return true;

  // どちらか一方の値が数値で他方が文字列の場合、文字列を数値に変換してから比較
  if (typeof a === "number" && typeof b === "string") {
    return Number(b) === a;
  }
  if (typeof a === "string" && typeof b === "number") {
    return Number(a) === b;
  }

  // どちらか一方の値がtrueの場合、trueを1に変換してから比較
  // どちらか一方の値がfalseの場合、falseを0に変換してから比較
  if (typeof a === "boolean") return eq(Number(a), b);
  if (typeof b === "boolean") return eq(a, Number(b));

  if (a instanceof Object && (typeof b === "number" || typeof b === "string")) {
    // 以下、どちらか一方の値がオブジェクトで他方が数値または文字列の場合
    // p54 3.9.3.4より、等値演算子(==)では、優先度なしアルゴリズムでオブジェクトを基本型に変換し、2つの基本型値を比較
    // Dateクラスでは常にtoString()変換
    if (a instanceof Date) {
      return eq(a.toString(), b);
    } else {
      // 3.9.3.6より：他のオブジェクトの場合は数値優先アルゴリズム(最初にvalueOf()、基本型にならない場合はtoString())
      return !(a.valueOf() instanceof Object)
        ? eq(a.valueOf(), b)
        : eq(a.toString(), b);
    }
  }
  if (b instanceof Object && (typeof a === "number" || typeof a === "string")) {
    if (b instanceof Date) {
      return eq(a, b.toString());
    } else {
      return !(b.valueOf() instanceof Object)
        ? eq(a, b.valueOf())
        : eq(a, b.toString());
    }
  }
  return false;
}

// <= (2つのオペランドの相対的な順序（数値上またはアルファベット順）を調べる)
// p88: 4.9.2 比較演算子を参照
export function lte(a, b) {
  // p89 どちらかのオペランドがNaNの場合、またはNaNに変換される場合、常にfalseを返す
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }
  // 両方のオペランドが数値同士は、等しいかaがbより小さいときtrue
  // 文字同士の場合は、の2つの文字列をアルファベット順で比較
  if (
    (typeof a === "number" && typeof b === "number") ||
    (typeof a === "string" && typeof b === "string")
  ) {
    return a === b || a < b;
  }

  // p88: 4.9.2: 少なくとも片一方のオペランドが文字列ではない場合、
  // 両方のオペランドが数値に変換され、数値的に比較されます。
  if (typeof a !== "string" || typeof b !== "string") {
    return lte(Number(a), Number(b));
  }

  // p54 3.9.3.4より、比較演算子では、オペランドの一方がオブジェクトの場合
  // 数値優先アルゴリズムを使用して、オブジェクトを基本型に変換

  // 以下だと両方オブジェクトの場合に対応できない、、
  // if (a instanceof Object && (typeof b === "number" || typeof b === "string")) {
  //   return !(a.valueOf() instanceof Object)
  //     ? lte(a.valueOf(), b)
  //     : lte(a.toString(), b);
  // }
  // if (b instanceof Object && (typeof a === "number" || typeof a === "string")) {
  //   return !(b.valueOf() instanceof Object)
  //     ? lte(a, b.valueOf())
  //     : lte(a, b.toString());
  // }
  if (a instanceof Object || b instanceof Object) {
    return lte(toPrimitive(a), toPrimitive(b));
  }
  return false;
}

// オブジェクトを基本型に変換する（数値優先アルゴリズム, p54 3.9.3.6）
// 基本型がそのまま渡ってきたら何もしない
function toPrimitive(x) {
  if (x instanceof Object) {
    return !(x.valueOf() instanceof Object) ? x.toString() : x.valueOf();
  } else return x;
}

// メモ
// const fn = () => {};
// console.log(fn.valueOf()); // => [Function: fn]
// console.log(typeof fn.valueOf()); // => function
// console.log(fn.valueOf() instanceof Object); // => true
