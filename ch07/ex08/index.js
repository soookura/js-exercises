export function reverse(text) {
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
  const graphemes = [];
  for (const { segment } of segmenter.segment(text)) {
    graphemes.push(segment);
  }
  graphemes.reverse();
  return graphemes.join("");
}

// MDN:
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
