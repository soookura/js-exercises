class Example {
  valueOf() {
    return 100;
  }

  toString() {
    return "hello";
  }
}

let obj = new Example();
// valueOf()
console.log(Number(obj));

//toString()
console.log(String(obj));
