import { findOddNumber } from './odd-number'

describe("findOddNumber", () => {
  test("[7]", () => {
    expect(findOddNumber([7])).toBe(7);
  });

  test("[0]", () => {
    expect(findOddNumber([0])).toBe(0);
  });

  test("[1, 1, 2]", () => {
    expect(findOddNumber([1, 1, 2])).toBe(2);
  });

  test("[0, 1, 0, 0, 1]", () => {
    expect(findOddNumber([0, 1, 0, 0, 1])).toBe(0);
  });

  test("[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]", () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });
});
