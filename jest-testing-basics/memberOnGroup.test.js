import makeMemberOnGroup from "./memberOnGroup";

test("should throw", () => {
  expect(() => makeMemberOnGroup()).toThrowError();
});
