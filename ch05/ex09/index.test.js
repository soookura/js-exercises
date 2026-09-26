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
const notJsonText1 = "[1, 2, 3, 4, ]";
const notJsonText2 = '{"foo": 1, }';
const notJsonText3 = "{'foo': 1}";
const notJsonText4 = "'string'";

test("正常な文字列で成功を返す", () => {
  expect(JsonParse(jsonText)).toEqual({ success: true, data: jsonObject });
});

test("不正な文字列で失敗を返す", () => {
  expect(JsonParse(notJsonText1)).toEqual({
    success: false,
    error: expect.any(String),
  });
  expect(JsonParse(notJsonText2)).toEqual({
    success: false,
    error: expect.any(String),
  });
  expect(JsonParse(notJsonText3)).toEqual({
    success: false,
    error: expect.any(String),
  });
  expect(JsonParse(notJsonText4)).toEqual({
    success: false,
    error: expect.any(String),
  });
});
