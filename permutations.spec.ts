import { findPermutations } from "./permutations";

describe("findPermutations", () => {
  test("a", () => {
    expect(findPermutations("a")).toEqual(["a"]);
  });

  test("ab", () => {
    expect(findPermutations("ab")).toEqual(["ab", "ba"]);
  });

  test("'abc'", () => {
    expect(findPermutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });

  test("'aabb'", () => {
    expect(findPermutations("aabb")).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
