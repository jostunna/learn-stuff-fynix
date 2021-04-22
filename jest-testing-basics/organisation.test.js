import makeOrganisation from "./organisation";

test("should throw at name", () => {
  expect(() => makeOrganisation()).toThrow(
    new Error("Organisation must have a string name.")
  );
});

test("should create organisation", () => {
  let userId = 1;
  let userName = "farmers";
  let userDescription = "farmers financial inclusion";

  const organisation = makeOrganisation({
    id: userId,
    name: userName,
    description: userDescription,
  });

  expect(typeof organisation).toBe("object");

  expect(organisation.getId()).toBe(1);
  expect(organisation.getHash()).toBe(2);
  expect(organisation.getName()).toBe("farmers");
  expect(organisation.getDescription()).toBe("farmers financial inclusion");
});
