function restrict(target, template) {
  for (const key of Object.keys(target)) {
    // templateの独自プロパティにない場合、targetからそのプロパティを削除
    if (!template.hasOwnProperty(key)) {
      delete target[key];
    }
  }
  return target;
}

function substract(target, ...sources) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      // sourceの独自プロパティキーが、targetの独自プロパティに存在する場合に削除
      if (target.hasOwnProperty(key)) {
        delete target[key];
      }
    }
  }
  return target;
}
export { restrict, substract };
