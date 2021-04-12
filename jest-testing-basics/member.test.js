const buildMakeMember = require("./member");

const Id = {
  makeId: () => Math.floor(Math.random() * 10),
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
