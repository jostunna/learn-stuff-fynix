import makeOrganisationAdmin from "./organisationAdmin";

test("should throw at organisationId", () => {
  expect(() => makeOrganisationAdmin()).toThrowError();
});
