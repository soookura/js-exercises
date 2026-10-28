import { newHashTable, hash } from "./index.js";
import { describe, it, expect } from "vitest";

describe("newHashTable", () => {
  it("問題文のsample通り動作する", () => {
    const hashTable = newHashTable(10);
    // put(配置)
    hashTable.put("key1", "value1");
    hashTable.put("key2", { value: "value2" });
    expect(hashTable.size).toBe(2);

    // get
    expect(hashTable.get("key1")).toBe("value1");
    expect(hashTable.get("key2")).toEqual({ value: "value2" });

    // put(更新)
    hashTable.put("key2", "new value");
    expect(hashTable.get("key2")).toBe("new value");

    // remove
    hashTable.remove("key2");
    expect(hashTable.get("key2")).toBeUndefined();
    expect(hashTable.size).toBe(1);
  });
});

describe("put", () => {
  it("空のハッシュテーブルに新規追加", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    expect(table.size).toBe(1);
  });
  it("追加するインデックスが衝突した場合、末尾に追加されていく", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key2", 2);
    const index = hash("key1") % 3;
    expect(table.entries[index]).toEqual({
      key: "key1",
      value: 1,
      next: {
        key: "key2",
        value: 2,
        next: undefined,
      },
    });
    expect(table.size).toBe(2);
  });
  it("既存のキーを追加した場合、更新のみされ追加は行われない(第一階層)", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key1", 2);
    const index = hash("key1") % 3;
    expect(table.entries[index]).toEqual({
      key: "key1",
      value: 2,
      next: undefined,
    });
    expect(table.size).toBe(1);
  });
  it("既存のキーを追加した場合、更新のみされ追加は行われない(第二階層以降)", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key2", 2); // key1と同じインデックス
    table.put("key2", 3);
    const index = hash("key1") % 3;
    expect(table.entries[index]).toEqual({
      key: "key1",
      value: 1,
      next: {
        key: "key2",
        value: 3, // 更新されている
        next: undefined,
      },
    });
    expect(table.size).toBe(2);
  });
});

describe("get", () => {
  it("指定したキーの値を正しく取得できる(第一階層)", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    expect(table.get("key1")).toBe(1);
  });
  it("指定したキーの値を正しく取得できる(第二階層以降)", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key2", 2); // key1と同じインデックス
    expect(table.get("key2")).toBe(2);
  });
  it("指定したキーが存在しない場合はundefinedを返す", () => {
    const table = newHashTable(3);
    expect(table.get("key1")).toBe(undefined);
  });
});

describe("remove", () => {
  it("指定したキーのマッピングを正しく削除できる(第一階層)", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key2", 2); // key1と同じインデックス
    // 削除
    table.remove("key1");
    const index = hash("key1") % 3;
    expect(table.entries[index]).toEqual({
      key: "key2",
      value: 2,
      next: undefined,
    });
    expect(table.size).toBe(1);
  });
  it("指定したキーのマッピングを正しく削除できる(第二階層以降)", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key2", 2); // key1と同じインデックス
    table.put("key3", 3); // key1と同じインデックス
    // 真ん中の階層を削除
    table.remove("key2");
    const index = hash("key1") % 3;
    // key2の階層が削除され、key3の階層が繰り上がっている
    expect(table.entries[index]).toEqual({
      key: "key1",
      value: 1,
      next: {
        key: "key3",
        value: 3,
        next: undefined,
      },
    });
    expect(table.size).toBe(2);
  });
  it("指定したキーが存在しない場合は何もしない", () => {
    const table = newHashTable(3);
    table.put("key1", 1);
    table.put("key2", 2); // key1と同じインデックス
    table.remove("key3");
    const index = hash("key1") % 3;
    expect(table.entries[index]).toEqual({
      key: "key1",
      value: 1,
      next: {
        key: "key2",
        value: 2,
        next: undefined,
      },
    });
    expect(table.size).toBe(2);
  });
});
