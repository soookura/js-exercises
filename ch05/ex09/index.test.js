import { JsonParse } from "./index.js";
import { test, expect } from "vitest";

// 正常なJSONの例
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON
// から引用しました
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

const jsonObject = {
  browsers: {
    firefox: {
      name: "Firefox",
      pref_url: "about:config",
      releases: {
        1: {
          release_date: "2004-11-09",
          status: "retired",
          engine: "Gecko",
          engine_version: "1.7",
        },
      },
    },
  },
};

// 不正なJSONの例
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#%E4%B8%8D%E6%AD%A3%E3%81%AA_json
// から引用
const notJsonTexts = [
  ["不正例1", "[1, 2, 3, 4, ]"],
  ["不正例2", '{"foo": 1, }'],
  ["不正例3", "{'foo': 1}"],
  ["不正例4", "'string'"],
];

// 以下テスト
// 正常系
test("正常な文字列で成功を返す", () => {
  expect(JsonParse(jsonText)).toEqual({ success: true, data: jsonObject });
});

// 異常系
test.each(notJsonTexts)("%s", (name, notJsonText) => {
  expect(JsonParse(notJsonText)).toEqual({
    success: false,
    error: expect.any(String),
  });
});
