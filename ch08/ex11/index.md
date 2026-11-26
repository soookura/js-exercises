# 解答

## 組み込み関数

```javascript
console.log(Array.isArray.toString());
```

### 結果

```console
function isArray() { [native code] }
```

## 自作関数

```javascript
const a = (x) => {
  // コメント
  return x ** 2;
};
console.log(a.toString());
```

### 結果

コメントなども含まれて関数全体が出力された

```console
(x) => {
  // コメント
  return x ** 2;
}
```
