function any(...funcs) {
  return function (...n) {
    // 与えた関数のうち一つでもtrueを返せば、 結果はtrue
    return funcs.some((func) => {
      return func(...n);
    });
  };
}

function catching(func, errorHandler) {
  return function (json) {
    try {
      return func(json);
    } catch (error) {
      return errorHandler(error);
    }
  };
}

export { any, catching };
