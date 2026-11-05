function pop(array) {
  const copy = [...array];
  copy.pop();
  return copy;
}
function push(array, element) {
  const copy = [...array];
  copy.push(element);
  return copy;
}
function shift(array) {
  const copy = [...array];
  copy.shift();
  return copy;
}
function unshift(array, element) {
  const copy = [...array];
  copy.unshift(element);
  return copy;
}
function sort(array, compareFn) {
  const copy = [...array];
  copy.sort(compareFn);
  return copy;
}
export { pop, push, shift, unshift, sort };
