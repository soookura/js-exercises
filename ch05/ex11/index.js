function add(a, b) {
  const result = a + b;
  if (a === undefined) {
    debugger;
    console.log("aが必要です");
  }
  return result;
}

const answer = add(10, 20);
console.log(answer);

add();
