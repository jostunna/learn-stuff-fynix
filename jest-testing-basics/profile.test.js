import makeProfile from "./profile";

test("should create profile", async () => {
  const profile = await makeProfile();
  expect(typeof profile).toBe("object");
});
