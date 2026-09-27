function fibWhile() {
  const fib = [1, 1];
  let count = 2;
  while (count < 10) {
    fib.push(fib[count - 2] + fib[count - 1]);
    count++;
  }
  return fib;
}

function fibDoWhile() {
  const fib = [1, 1];
  let count = 2;
  do {
    fib.push(fib[count - 2] + fib[count - 1]);
  } while (++count < 10); // 増加してから比較
  return fib;
}

function fibFor() {
  const fib = [1, 1];
  for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
}

export { fibWhile, fibDoWhile, fibFor };
