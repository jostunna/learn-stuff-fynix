import makeSuperAdmin from "./superAdmin";

test("should throw at profile id", () => {
  expect(() => makeSuperAdmin()).toThrowError();
});
