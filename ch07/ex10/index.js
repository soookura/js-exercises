function makeFixedSizeArray(size) {
  const array = new Array(size);
  return {
    get(index) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index, value) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length() {
      return array.length;
    },
  };
}

export class DynamicSizeArray {
  static INITIAL_SIZE = 4; // 初期サイズ

  constructor() {
    this.len = 0; // 動的配列とした時の長さ（this.array.length()は容量のため初期値は4だが、this.lenでは0）
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);
  }
  get(index) {
    // 動的配列の範囲外を指定した場合は、通常の配列定義に従いundefinedを返す
    if (index < 0 || this.len <= index) {
      return undefined;
    }
    return this.array.get(index);
  }
  set(index, value) {
    // indexが負の時、通常の配列だと"-1"というプロパティが作られるが実装が複雑なので、エラーとする
    if (index < 0) {
      throw new Error("indexは0以上にしてください");
    }
    // 指定されたindexが入りきるまで、配列の容量を倍にする
    while (index >= this.array.length()) {
      const old = this.array;
      this.array = makeFixedSizeArray(old.length() * 2);
      // 古い配列 (old) の要素を新しい配列にコピー
      for (let i = 0; i < old.length(); i++) {
        this.array.set(i, old.get(i));
      }
    }
    this.array.set(index, value);
    // 動的配列外のindexを指定され要素をsetした場合は、動的配列の長さの更新が必要
    if (index >= this.len) {
      this.len = index + 1;
    }
  }
  length() {
    return this.len;
  }
  push(value) {
    // 末尾の要素の次に付け足す（容量超過の処理は、this.setのものを使いまわせる）
    this.set(this.len, value);
  }
}
