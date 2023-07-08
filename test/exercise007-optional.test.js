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
describe("createRange", () => {
  test("a range of numbers as an array from start number to end number with a gap of step number in between", () => {
    const start = 3;
    const end = 11;
    const step = 2;
    expect(createRange(start, end, step)).toEqual([3, 5, 7, 9, 11]);
  });

  test("a range of numbers as an array", () => {
    const start = 2;
    const end = 4;
    const step = 1;
    expect(createRange(start, end, step)).toEqual([2, 3, 4]);
  });

  test("a range of numbers as an array", () => {
    const start = 5;
    const end = 10;
    const step = 0;
    expect(createRange(start, end, step)).toBe("Step should be greater than 0");
  });
});
