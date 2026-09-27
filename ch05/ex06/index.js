function test() {
  try {
    console.log("try内実行");
    throw "最初のエラー"; // 文字列もthrow可能（p129）
  } catch (e) {
    console.log(e);
    console.log("catch内実行");
    throw "次のエラー";
  } finally {
    console.log("finally内実行");
    // 以下のコメントを外すと、catch内でthrowした"次のエラー"が上書きされる（p132引用）
    // throw "エラーの上書き";
  }
}

try {
  test();
} catch (e) {
  console.log(e);
}

// 実行結果
// try内実行;
// 最初のエラー;
// catch内実行;
// finally内実行;
// 次のエラー;
