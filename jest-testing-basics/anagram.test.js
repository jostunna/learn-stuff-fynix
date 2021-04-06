const isAnagram = require("./anagram");

test("isAnagram function should exist", () => {
  expect(typeof isAnagram).toEqual("function");
});

test('"dormitory" is an anagram of "dirty room" ', () => {
  expect(isAnagram("dormitory", "dirty room")).toBeTruthy();
});
