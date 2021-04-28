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
  expect(profile.getId()).toBe(2);
  expect(profile.getFirstName()).toBe("Joel");
  expect(profile.getLastName()).toBe("Nsubuga");
  expect(profile.getGender()).toBe("MALE");
  expect(profile.getUserType()).toBe("MEMBER");
  expect(profile.getCountryName()).toBe("Uganda");
  expect(profile.getProfilePic()).toBe(null);
  expect(profile.getPhoneNumber()).toBe("0770856876");
  expect(profile.getIdType()).toBe("REFUGEE_ID");
  expect(profile.getIdNumber()).toBe("2");
  expect(profile.isVerified()).toBe(false);
});
