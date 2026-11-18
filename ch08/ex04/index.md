# 解答

## コード

```javascript
const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
```

## 予想

obj.om()の中で、nest.nm()がアロー関数でないメソッド呼び出しのため、nmを呼び出したオブジェクトnestがthisとなる。

nest.arrow()は、アロー関数のため、arrowが定義された環境、つまりオブジェクトnestにおけるthisを継承する。
このthisは、objのメソッドomが示すthisであり、obj.om()を実行したことでthisは呼び出し元のobjとなる。

よって以下の出力になると予想する。

```console
false, true
true, false
```

## 結果

出力結果は予想通りでした。
しかし、AIに自身の解答を見せたところ、アロー関数のthisの考え方が間違っているようでした。

MDNより正確には

- アロー関数は定義された時点で親スコープからthisを継承する
- オブジェクトリテラルではthisスコープは作成されず、その値は周囲のスコープから継承されます。

という旨の記載があるため、arrowにおけるthisはオブジェクトnestを素通りして、om内でthisが決まるため、objがthisとなるようでした。

### 引用

MDN：[this](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/this)
