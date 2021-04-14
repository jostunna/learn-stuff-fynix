import buildMakeProfile from "./profile";
import bcrypt from "bcrypt";

let country = { name: "Uganda", dial_code: "+256", code: "UG" };

let countryCode = country.code;

function makeCountry() {
  return {
    getCountryByCountryCode: (code) =>
      code === countryCode
        ? country
        : "The country code provided does not exist.",
    isValidCountry: (code) => !!(code === countryCode),
  };
}

function isPhoneNumberValid(phone) {
  let parsed = parseInt(phone);
  if (isNaN(parsed)) {
    return 0;
  }
  return !!parsed;
}

const ID_TYPES = ["NATIONAL_ID", "DRIVING_PERMIT", "REFUGEE_ID"];

function validateIdentification({ idType, idNumber }) {
  return !!(
    typeof idNumber === "string" &&
    idNumber.length &&
    ID_TYPES.includes(idType)
  );
}

const MALE = "MALE";
const FEMALE = "FEMALE";

function validateGender(sex) {
  if (typeof sex !== "string") {
    return false;
  }
  return [MALE, FEMALE].includes(sex);
}

const MEMBER = "MEMBER";
const SUPER_ADMIN = "SUPER_ADMIN";
const ORGANISATION_ADMIN = "ORGANISATION_ADMIN";

function validateUserType(userType) {
  if (typeof userType !== "string") {
    return false;
  }
  return [MEMBER, SUPER_ADMIN, ORGANISATION_ADMIN].includes(userType);
}

const create4DigitPIN = () => Math.floor(1000 + Math.random() * 9000);

const makeBcryptHash = async function (password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(`${password}`, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
    throw new Error("Operation failed.");
  }
};

async function makeHashedPassword(passwordToHash) {
  return makeBcryptHash(passwordToHash);
}

const makeProfile = buildMakeProfile({
  makeCountry,
  isPhoneNumberValid,
  validateIdentification,
  validateGender,
  validateUserType,
  createRandomPIN: create4DigitPIN,
  makeHashedPassword,
});
