# 解答

## コード

```javascript
function f() {
  try {
    return true;
  } finally {
    return false;
  }
}

console.log(f());
```

## 予想

書籍p131より
「tryブロックのコードが一部でも実行されると、finally節のコードも必ず実行されます。」と
「return文やcontinue文、break文で処理がtryブロックから移動する場合は、処理が移動する前にfinallyブロックが実行されます。」
とあるので、必ず最後にfinally内のreturnが実行され、falseが返ると予想。

## 結果

予想通りfalseが返りました。
[MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%8B%E3%82%89%E3%81%AE_return)でも以下記載ありました。
「finallyブロックが値を返した場合、tryブロックやcatchブロックのreturn文に関係なく、その値がtry-catch-finally全体の返値になります。これはcatchブロック内で例外が発生した場合も含まれます。」
