const o1 = { x: 1, y: 2 };
const o2 = Object.create(o1);
o2.z = 3;
console.log(Object.getPrototypeOf(o2) === o1); // => true
console.log(o2.x + o2.y + o2.z); // => 6 :継承プロパティにもアクセス可能
