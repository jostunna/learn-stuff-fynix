const countChar = require("./countChar");

test("kakkerlak should count 4", () => {
  expect(countChar("kakkerlak", "k")).toBe(4);
});

test("should count 0", () => {
  expect(countChar("kakkerlak", "c")).toBe(0);
});
