import makeOrganisation from "./organisation";

test("should throw at name", () => {
  expect(() => makeOrganisation()).toThrow(
    new Error("Organisation must have a string name.")
  );
});
