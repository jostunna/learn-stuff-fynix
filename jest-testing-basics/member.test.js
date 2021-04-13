const buildMakeMember = require("./member");

const Id = {
  makeId: () => Math.floor(Math.random() * 10) + 1,
  isValidId: (hash) => !!hash,
};

const country = {
  name: "Uganda",
  dial_code: "+256",
  code: "UG",
};

const makeCountry = () => {
  return {
    getCountryByCountryCode: (countryCode) => {
      return countryCode == country.code
        ? country
        : "Country code doesnt exist";
    },
    isValidCountry: (countryCode) => !!(countryCode == country.code),
  };
};

let isPhoneNumberValid = (phone) => !!phone;

let validateIdentification = ({ idType, idNumber }) =>
  !!(
    typeof idNumber === "string" &&
    idNumber.length &&
    idType === "NATIONAL_ID"
  );

const makeMembership = () => {
  return {
    makeMembershipId: (countryCode) => "FX" + `${countryCode}` + "12345",
    isValidMembershipId: (membershipId) => !!membershipId,
  };
};

const makeMember = buildMakeMember({
  Id,
  makeCountry,
  isPhoneNumberValid,
  validateIdentification,
  makeMembership,
});

test("should expect a value", () => {
  expect(makeMember()).toEqual(expect.anything());
});

test("should expect an object", () => {
  expect(typeof makeMember()).toBe("object");
});

test("should throw at hash", () => {
  let userHash = 0;
  expect(() => makeMember({ hash: userHash })).toThrowError(
    new Error("Member must have a valid hash.")
  );
});

test("should throw at isAdmin", () => {
  let userHash = Id.makeId();
  let admin = "yes";

  expect(() => makeMember({ hash: userHash, isAdmin: admin })).toThrowError(
    new Error("Member must have a valid 'isAdmin' property ")
  );
});

test("should throw at profileId", () => {
  let userHash = Id.makeId();
  let admin = false;
  let userProfileId = null;

  expect(() =>
    makeMember({ hash: userHash, isAdmin: admin, profileId: userProfileId })
  ).toThrowError(new Error('Member must have a "profileId"'));
});

test("should throw at countryCode", () => {
  let userHash = Id.makeId();
  let admin = true;
  let userProfileId = 123;
  let userCountryCode = null;

  expect(() =>
    makeMember({
      hash: userHash,
      isAdmin: admin,
      profileId: userProfileId,
      countryCode: userCountryCode,
    })
  ).toThrowError(new Error("Looks like the country code provided is valid."));
});

test("should throw at occupation", () => {
  let userHash = Id.makeId();
  let admin = true;
  let userProfileId = 123;
  let userCountryCode = "UG";
  let userOccupation = "";

  expect(() =>
    makeMember({
      hash: userHash,
      isAdmin: admin,
      profileId: userProfileId,
      countryCode: userCountryCode,
      occupation: userOccupation,
    })
  ).toThrowError(new Error("Member must have an occupation."));
});

test("should throw at relationshipWithMember", () => {
  let userHash = Id.makeId();
  let admin = true;
  let userProfileId = 123;
  let userCountryCode = "UG";
  let userOccupation = "farmer";
  let userRelationshipWithMember = "";

  expect(() =>
    makeMember({
      hash: userHash,
      isAdmin: admin,
      profileId: userProfileId,
      countryCode: userCountryCode,
      occupation: userOccupation,
      relationshipWithMember: userRelationshipWithMember,
    })
  ).toThrowError(
    new Error("Next of kin must have a relationship with the member. ")
  );
});

test("should throw at nextOfKinFirstName", () => {
  let userHash = Id.makeId();
  let admin = true;
  let userProfileId = 123;
  let userCountryCode = "UG";
  let userOccupation = "farmer";
  let userRelationshipWithMember = "father";
  let userNextOfKinFirstName = "";

  expect(() =>
    makeMember({
      hash: userHash,
      isAdmin: admin,
      profileId: userProfileId,
      countryCode: userCountryCode,
      occupation: userOccupation,
      relationshipWithMember: userRelationshipWithMember,
      nextOfKinFirstName: userNextOfKinFirstName,
    })
  ).toThrowError(new Error("Next of kin must have a string first name. "));
});

test("should throw at nextOfKinLastName", () => {
  let userHash = Id.makeId();
  let admin = true;
  let userProfileId = 123;
  let userCountryCode = "UG";
  let userOccupation = "farmer";
  let userRelationshipWithMember = "father";
  let userNextOfKinFirstName = "Joel";
  let userNextOfKinLastName = "";

  expect(() =>
    makeMember({
      hash: userHash,
      isAdmin: admin,
      profileId: userProfileId,
      countryCode: userCountryCode,
      occupation: userOccupation,
      relationshipWithMember: userRelationshipWithMember,
      nextOfKinFirstName: userNextOfKinFirstName,
      nextOfKinLastName: userNextOfKinLastName,
    })
  ).toThrowError(new Error("Next of kin must have a string last name."));
});

test("should throw at nextOfKinPhone", () => {
  let userHash = Id.makeId();
  let admin = true;
  let userProfileId = 123;
  let userCountryCode = "UG";
  let userOccupation = "farmer";
  let userRelationshipWithMember = "father";
  let userNextOfKinFirstName = "Joel";
  let userNextOfKinLastName = "Nsubuga";
  let userNextOfKinPhone = "";

  expect(() =>
    makeMember({
      hash: userHash,
      isAdmin: admin,
      profileId: userProfileId,
      countryCode: userCountryCode,
      occupation: userOccupation,
      relationshipWithMember: userRelationshipWithMember,
      nextOfKinFirstName: userNextOfKinFirstName,
      nextOfKinLastName: userNextOfKinLastName,
      nextOfKinPhone: userNextOfKinPhone,
    })
  ).toThrowError(
    new Error(
      'Next of kin must have a valid phone number that starts with a "+", followed by a country code and their number. '
    )
  );
});
