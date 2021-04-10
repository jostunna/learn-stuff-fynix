const reverseString = require("./reversestring");

test("check whether reversestring function exists", () => {
  expect(reverseString).toBeDefined();
});

test("string should reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
