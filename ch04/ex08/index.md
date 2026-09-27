# 解答

undefinedのMDN引用：「古いブラウザーを除くすべてのブラウザーでは、 undefined は、設定不可、書込不可のプロパティとなります。 (そうでない場合でも、上書きは避けてください。)」より、古いブラウザではグローバルのundefinedを違う値に書き換えられる可能性があったため、確実にundefinedという値を使用したい場面では、void 0が使用されていた。

現在のブラウザでは、書き込みが不可能になったため、直接意味が読み取れるundefinedを使用できる。
ただし、undefinedは予約語でなく、グローバルスコープ以外のスコープではundefinedを識別子 (変数名) として使うことができるので注意が必要。（以下例MDNより引用）

```javascript
(() => {
  const undefined = "foo";
  console.log(undefined, typeof undefined); // foo string
})();
```

## 引用

[MDN：undefined](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined)

[MDN：void演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/void)
