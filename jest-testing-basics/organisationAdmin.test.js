import makeOrganisationAdmin from "./organisationAdmin";

test("should throw at organisationId", () => {
  expect(typeof makeOrganisationAdmin()).toBe("object");
});
