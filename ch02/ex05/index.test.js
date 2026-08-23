import { promisify } from "util";
import { exec } from "child_process";
import { describe, it, expect } from "vitest";

describe("charfreq", () => {
  it("変更前と結果が同じであること", async () => {
    // promisifyが返すのは、{stdout: '...', stderr: '...'}のオブジェクト
    const result = await promisify(exec)(
      'echo "Hello,World" | node ch02/ex05/index.js',
    );

    const expectedResult = await promisify(exec)(
      'echo "Hello,World" | node ch02/ex05/charfreq.js',
    );
    expect(result.stdout).toBe(expectedResult.stdout);
  });
});
