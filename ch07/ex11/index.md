# 解答

## push の平均時間計算量

ex10ではthis.set内の処理を使いまわしたが、実際は以下のような処理になる

```javascript
push(value) {
  if (this.len >= this.array.length()) {
    const old = this.array;
    this.array = makeFixedSizeArray(old.length() * 2);
    // 古い配列 (old) の要素を新しい配列にコピー
    for (let i = 0; i < old.length(); i++) {
      this.array.set(i, old.get(i));
    }
  }
  this.array.set(this.len, value);
  this.len += 1
}
```

通常のpushでは要素を1つ追加するだけなので、計算量は1になる。
一方、容量が満杯になった状態でpushを行うと、容量を倍にし既存の要素をすべてコピーする処理が必要になる。
具体的にはプッシュ回数が、5, 9, 17...回の時にコピーが行われ、コピー回数はそれぞれ4, 8, 16, ...回となる。
よってpushの合計計算量は

- 通常の追加処理：n回
- コピー回数(nは2のべき乗と仮定)：4 + 8 + 16 + ... 2^(log₂n − 1) = n - 4

  （等比数列の和の計算：log₂n=kとすると、
  S = 4(2^(k-2) - 1) / (2 - 1)
  = 2^k - 4
  = n - 4
  ）

よって合計の計算量は 2n-4 となり、これをnで割ると(2n − 4)/n = 2 − 4/n
nが大きくなると2に近づき定数となるので、平均時間計算量はO(1)

## copyA, copyB の時間計算量

copyAはfor文の中で、result[i] = array[i] がn回回るので、O(n)
copyBもfor文の中で、result.push(v) がn回回り、pushの計算量はO(1)なので、O(n)
よって、copyA, copyBはともに計算量は同じ
