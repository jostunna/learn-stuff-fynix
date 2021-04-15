import makeProfile from "./profile";

test("should create profile", async () => {
  const userId = 2;
  const userFirstName = "Joel";
  const userLastName = "Nsubuga";
  const userPhone = "0770856876";
  const userGender = "MALE";
  const userIdType = "REFUGEE_ID";
  const userIdNumber = "2";
  const userType = "MEMBER";

  const profile = await makeProfile({
    id: userId,
    firstName: userFirstName,
    lastName: userLastName,
    phone: userPhone,
    gender: userGender,
    idType: userIdType,
    idNumber: userIdNumber,
    userType: userType,
  });

  expect(typeof profile).toBe("object");
});
