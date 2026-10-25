function hash(key) {
  return key.length;
}

function newHashTable(capacity) {
  return {
    size: 0, // マッピング数を示すプロパティ
    entries: new Array(capacity), // マッピングを格納する固定長の配列
    get(key) {
      // keyにマップされた値を取得する
      const index = hash(key) % capacity;
      let current = this.entries[index]; // 該当するハッシュテーブル内のノード
      while (current !== undefined) {
        // ノード内で該当のキーが見つかるまで、nextを探索しつづける
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
    },
    put(key, value) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const index = hash(key) % capacity;
      // 新規配置の場合
      if (this.entries[index] === undefined) {
        this.entries[index] = { key, value, next: undefined };
      }
      // 既存置き換えの場合
      else {
        // 第一階層の更新の場合
        let current = this.entries[index];
        if (current.key === key) {
          current.value = value; // 値のみ置き換え
          return;
        }
        // 第二階層以降の更新の場合
        while (current.next !== undefined) {
          current = current.next;
          if (current.key === key) {
            current.value = value;
            return;
          }
        }
        current.next = { key, value, next: undefined };
      }
    },
    remove(key) {
      // keyのマッピングを削除する
      const index = hash(key) % capacity;
      // 第一階層の削除の場合
      let current = this.entries[index];
      if (current !== undefined && current.key === key) {
        this.entries[index] = current.next; // next以降の階層を繰り上げる
        return;
      }
      //第二階層以降の削除の場合
      while (current !== undefined && current.next !== undefined) {
        if (current.next.key === key) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    },
  };
}

function sample() {
  const hashTable = newHashTable(10);
  hashTable.put("key1", "value1");
  hashTable.put("key2", { value: "value2" });

  console.log(`size=${hashTable.size}`); // => size=2
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}

  hashTable.put("key2", "new value");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  hashTable.remove("key2");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=1
}

sample();
