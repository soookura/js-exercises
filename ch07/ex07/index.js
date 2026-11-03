// 選択ソート(compareを指定しない場合は昇順に並ぶ)
export function selectionSort(
  array,
  compare = (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0),
) {
  // array = []の場合はループは実行されない
  for (let i = 0; i < array.length; i++) {
    let firstIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[firstIndex], array[j]) > 0) {
        firstIndex = j;
      }
    }
    // 先頭との入れ替え
    [array[i], array[firstIndex]] = [array[firstIndex], array[i]];
  }
  return array;
}

// 計算量の計算
// 配列の長さがnの時、外側のループはn回計算される
// 内側のループは
//  1回目(外側のi=0)：n-1回
//  2回目(外側のi=1)：n-2回
//  ...
//  n-1回目(外側のi=n-2)：1回
//  n回目(外側のi=n-1):内側回らない
// よって計算量は、(n-1)+(n-2)....+1 = (n^2-n)/2
// 定数、低次数を切り捨てて、O(n^2)となる
