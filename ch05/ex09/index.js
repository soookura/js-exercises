// メモ：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// 解析する文字列が有効なJSONでない場合、SyntaxError

export function JsonParse(str) {
  try {
    const data = JSON.parse(str);
    return { success: true, data };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

const notJsonText1 = "[1, 2, 3, 4, ]";
const notJsonText2 = '{"foo": 1, }';
const notJsonText3 = "{'foo': 1}";
const notJsonText4 = "'string'";
console.log(JsonParse(notJsonText1));
console.log(JsonParse(notJsonText2));
console.log(JsonParse(notJsonText3));
console.log(JsonParse(notJsonText4));
