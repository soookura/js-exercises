export function addMyCall(f) {
  f.myCall = function (obj, ...args) {
    const a = f.bind(obj, ...args);
    return a();
  };
}

// メモ
// f.myCallで関数に新しいプロパティを設定
// プロパティの値には、第一引数に呼び出しコンテキストに設定したいオブジェクト、
// 第二引数以降にfに与えたい引数を設定した関数を書く
// argsがfで必要な引数より少ない場合、足りない分はundefinedとなり、想定外の挙動をする可能性もあるが、
// それは実際callを使用した場合も同様なので許容する。
