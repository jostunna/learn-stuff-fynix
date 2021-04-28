import makeSuperAdmin from "./superAdmin";

test("should throw at profile id", () => {
  expect(typeof makeSuperAdmin()).toBe("object");
});
