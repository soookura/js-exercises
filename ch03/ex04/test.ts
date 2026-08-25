// NFCかNFDかでlengthの値は変わるのか

// パ＝\u{30D1}
// 半濁音 = \u{309A} ハ = \u{30CF}
console.log("NFC:\u{30D1}");
console.log("NFD:\u{30CF}\u{309A}");

console.log("\u{30D1}".length); // 1
console.log("\u{30CF}\u{309A}".length); // 2
