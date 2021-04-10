const fizzbuzz = require("./fizzbuzz");

test("fizzbuzz function should exist", () => {
  expect(typeof fizzbuzz).toEqual("function");
});

test("should return Buzz", () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});

test("should return 4", () => {
  expect(fizzbuzz(4)).toBe(4);
});

test("should return FizzBuzz", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test("should return undefined", () => {
  expect(fizzbuzz()).toBeUndefined();
});
