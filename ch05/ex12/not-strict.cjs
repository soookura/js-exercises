obj = { name: "kuramochi", age: 25 };
with (obj) {
  name = "tanaka";
}
console.log(obj);
// => { name: 'tanaka', age: 25 }
