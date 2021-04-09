const buildMakeMember = require("./member");

const Id = () => {
  return {
    makeId: () => "123abc",
    isValid: true,
  };
};

const makeCountry = () => {
  return {
    getCountryByCode: () => {
      return {
        name: "Uganda",
        dial_code: "+256",
        code: "UG",
      };
    },
    isValidCountry: true,
  };
};

let isPhoneNumberValid = true;

let validateIdentification = true;

const makeMembership = () => {
  return {
    makeMembershipId: () => "FX+256id123abc",
    isValidMembershipId: true,
  };
};

const makeMember = buildMakeMember({
  Id,
  makeCountry,
  isPhoneNumberValid,
  validateIdentification,
  makeMembership,
});

test("should create a member", () => {
  expect(makeMember({}));
});
