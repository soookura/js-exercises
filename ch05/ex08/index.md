# 解答

## コード

```javascript
let x = 0;

for (let i = 1; i <= 5; i++) {
  x = i;
  try {
    throw Error();
  } catch {
    break;
  } finally {
    continue;
  }
}

console.log(x);
```

## 予想

まずi=1、1<=5がtrueより1回目のループが実行
ループ内ではxに1が代入され、次いでtry内でエラーがスロー、catch節内に移動、ここでbreakより直ちにforループが終了する（p125：5.5.2）が、その処理の前にfinally節のコードが必ず実行されるので、continue文によって次のループの処理を再開する（p127：5.5.3）処理に上書きされる。
その後ループが継続し、最後のループではfor文内statementの実行後にincrement式が評価され、i=6でfor文が終了。よって6が出力される。

## 結果

5が出力されました。
予想の最後の文章が間違っていました。increment式が評価され、i=6となりますが、その次のループに入る前に6<=5がfalseとなるため、x=6となるstatementは実行されません。よってx=5がxへの最後の代入となり、5が出力されます。
