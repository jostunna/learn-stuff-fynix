const functions = require("./functions");

test("should add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("should add 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(false)).toBeFalsy();
});

test("user should be Joel Mubiru Object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Joel",
    lastName: "Mubiru",
  });
});

test("I should not be in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("usernames array should contain admin", () => {
  const usernames = ["joel", "mubiru", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data
// Promise;
// test("user fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// OR

// Async Await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
