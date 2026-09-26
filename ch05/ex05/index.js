export function getEvenValues(object) {
  const output = {};
  for (const [key, value] of Object.entries(object)) {
    if (value % 2 === 0) {
      output[key] = value;
    }
  }
  return output;
}
