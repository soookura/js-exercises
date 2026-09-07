# 結果

Windows：NFC
macOS：NFD

Windows OSにて半濁音名のファイルを作成し、
https://aduce.jp/ops/charcode-converter
にてUnicodeエンコードを実施したところ、NFCでした。

Mac OSについては調べる方法がなかったため、
https://qiita.com/ko1nksm/items/3a66197efd1c096a801f
の記事にて調べました。ファイルシステム自体は正規化は実行しないが、macOSに標準搭載されているファイル管理アプリFinderで実行した場合は
NFDに正規化を行う、ターミナルでmkdir実施等では正規化は実行されない。
