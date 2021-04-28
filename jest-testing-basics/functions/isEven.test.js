const isEven = require("./isEven");

test("isEven(0) should return true", () => {
  expect(isEven(0)).toBeTruthy();
});

test("called with 1 should return false", () => {
  expect(isEven(1)).toBeFalsy();
});

test("called with -1 should be falsy", () => {
  expect(isEven(-1)).toBeFalsy();
});

test("called with 4 should be truthy", () => {
  expect(isEven(4)).toBeTruthy();
});
