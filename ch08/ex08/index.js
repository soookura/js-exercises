export function counterGroup() {
  let totalCount = 0; // すべてのカウンターで共有できる
  let numCounters = 0;
  const countArray = []; // 各カウンターごとのカウント数をまとめた配列、要素の順番はそのカウンターが作られた順
  return {
    newCounter: function () {
      let n = 0; // 各カウンターのカウント数、newCounterが呼ばれるたびに異なる
      const index = numCounters;
      countArray[index] = 0; // counter作成後に初期値を設定
      return {
        // count()が返すのは増やす前の値
        count: function () {
          totalCount += 1;
          countArray[index] = n + 1;
          return n++;
        },
        reset: function () {
          totalCount -= n;
          n = 0;
          countArray[index] = 0;
        },
      };
    },
    total: function () {
      return totalCount;
    },
    average: function () {
      if (numCounters === 0) {
        throw new TypeError();
      }
      return totalCount / numCounters;
    },
    variance: function () {
      if (numCounters < 2) {
        throw new TypeError();
      }
      const squaredDiffs = countArray.map(
        (x) => (x - totalCount / numCounters) ** 2,
      );
      const variance =
        squaredDiffs.reduce((acc, cur) => acc + cur, 0) / squaredDiffs.length;
      return variance;
    },
  };
}
