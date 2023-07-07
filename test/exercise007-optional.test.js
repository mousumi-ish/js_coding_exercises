const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007-optional");

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    const n = 123456;
    expect(sumDigits(n)).toBe(21);
  });
  test("returns the sum of all its digits", () => {
    const n = 5;
    expect(sumDigits(n)).toBe(5);
  });
  test("returns the sum of all its digits", () => {
    const n = 456;
    expect(sumDigits(n)).toBe(15);
  });
});
