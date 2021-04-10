const isPalindrome = require("./isPalindrome");

test("should be defined", () => {
  expect(isPalindrome).toBeDefined();
});

test("should equal reverse", () => {
  const status = isPalindrome("rar");
  expect(status).toBe(true);
});
