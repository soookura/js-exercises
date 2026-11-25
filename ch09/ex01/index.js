export class C {
  // 静的メソッド（クラスメソッド）
  static method() {
    return 1;
  }
  static C = class {
    static method() {
      return 3;
    }
    method() {
      return 4;
    }
  };

  // インスタンスメソッド
  method() {
    return 2;
  }
  C = class {
    static method() {
      return 5;
    }
    method() {
      return 6;
    }
  };
}

// メモ：例えば return 6 の場合
// new C() でインスタンスを作ると、インスタンスフィールドの C（クラス）がそのインスタンス自身に付く
// そのクラス C をさらに new してインスタンスを作る
// 内側のクラスのインスタンスメソッド method() をプロトタイプから引き継いで呼び、6 を返す

// 以下AIに質問
// メモ：new new C().C().method() は以下のように解釈
// ( new ( (new C()).C )() ).method()
