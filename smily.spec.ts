import { countSmilyFace } from "./smily";

describe("countSmilyFace", () => {
  test("[':)', ';(', ';}', ':-D']", () => {
    expect(countSmilyFace([':)', ';(', ';}', ':-D'])).toBe(2);
  });

  test("[';D', ':-(', ':-)', ';~)']", () => {
    expect(countSmilyFace([';D', ':-(', ':-)', ';~)'])).toBe(3);
  });

  test("[';]', ':[', ';*', ':$', ';-D']", () => {
    expect(countSmilyFace([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });
});
