// メモ：6.7最後のmerge関数を参考
export const assign = function (target, ...sources) {
  // 1. target引数がnullまたはundefinedの場合はTypeError
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  // 2. targetがプリミティブの場合、オブジェクトに変換される
  const objTarget = new Object(target);

  // 3. 各sourceを順番に処理
  for (const source of sources) {
    // nullとundefinedは無視
    if (source === null || source === undefined) {
      continue;
    }
    // プリミティブの場合に備え、オブジェクトでラップ
    const objSource = new Object(source);
    // プロパティ名がSymbolのものも含め、列挙可能な独自プロパティをコピーする
    for (const key of Reflect.ownKeys(objSource)) {
      if (objSource.propertyIsEnumerable(key)) {
        objTarget[key] = objSource[key];
      }
    }
  }
  return objTarget;
};

// MDN引用：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#%E5%BC%95%E6%95%B0
