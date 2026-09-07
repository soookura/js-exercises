export const equal = (x: number, y: number): boolean => {
  const diff = Math.abs(x - y);
  return diff < 1e-10 ? true : false;
};
