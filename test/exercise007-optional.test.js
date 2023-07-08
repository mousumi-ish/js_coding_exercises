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
describe("getScreentimeAlertList", () => {
  test("an array of user objects and their usage in minutes of various applications", () => {
    const users =[
        {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
               ]
        },
        {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
               ]
        }
    ];
    const date = "2019-05-04";
    expect(getScreentimeAlertList(users, date)).toEqual([ 'Beth Smith' ]);
   });
});
