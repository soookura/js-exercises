# 解答

[引用](https://nodejs.org/learn/getting-started/debugging)

- node --inspect-wait ファイル名.js でNode.jsを起動する
  - node --inspect ファイル名.js => コード実行開始後デバッガーに接続
  - node --inspect-brk ファイル名.js => 1行目で停止し、デバッガーに接続、その後自分でコード実行
  - node --inspect-wait ファイル名.js => デバッガーに接続してから、そのまま実行開始してくれる
- ブラウザでchrome://inspectを開く
- Remote Targetのinspect をクリックする
- Chrome DevToolsが開きdebugger文でコードが止まる
