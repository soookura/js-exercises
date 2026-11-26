export class C {
  // 静的メソッド
  static method() {
    return 1;
  }
  // 静的フィールド
  static C = class {
    // 静的メソッド
    static method() {
      return 3;
    }
    // インスタンスメソッド
    method() {
      return 4;
    }
  };

  // インスタンスメソッド
  method() {
    return 2;
  }
  // インスタンスフィールド
  C = class {
    // 静的メソッド
    static method() {
      return 5;
    }
    // インスタンスメソッド
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

// test("class puzzle", () => {
//   expect(C.method()).toBe(1);
//   expect(new C().method()).toBe(2);
//   expect(C.C.method()).toBe(3);
//   expect(new C.C().method()).toBe(4);
//   expect(new C().C.method()).toBe(5);
//   expect(new new C().C().method()).toBe(6);
// });
