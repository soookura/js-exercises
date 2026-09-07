import { parse } from "acorn";

const ast_01 = parse(
  `let a
a
=
3
console.log(a)`,
  { ecmaVersion: "latest" },
);

const ast_02 = parse("let a; a = 3; console.log(a);", {
  ecmaVersion: "latest",
});

// replacerはなし、2スペースずつインデント
console.log(JSON.stringify(ast_01, null, 2));
console.log(JSON.stringify(ast_02, null, 2));
