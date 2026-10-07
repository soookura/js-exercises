const ricoh = ["r", "i", "c", "o", "h"];
delete ricoh[3];
console.log(ricoh); // => [ 'r', 'i', 'c', <1 empty item>, 'h' ]
console.log(ricoh.length); // => 5

// 以下メモ
console.log(ricoh[3] === undefined); // => true
