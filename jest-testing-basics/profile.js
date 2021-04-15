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

const makeHash = function (password) {
  password = "iehncosoan390afoiohajjjajwko2";
  const hashedPassword = password;
  return hashedPassword;
};

function makeHashedPassword(passwordToHash) {
  return makeHash(passwordToHash);
}

function buildMakeProfile({
  makeCountry,
  isPhoneNumberValid,
  validateIdentification,
  validateGender,
  validateUserType,
  createRandomPIN,
  makeHashedPassword,
}) {
  return async function makeProfile({
    id = null,
    firstName,
    lastName,
    phone,
    gender,
    countryCode = "UG",
    profilePic,
    idType,
    idNumber,
    PIN = createRandomPIN(),
    userType,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    let verificationStatus = false;

    if (!validateIdentification({ idType, idNumber })) {
      throw new Error("Could not verify universal identification records.");
    }
    if (!(typeof PIN === "number" && `${PIN}`.length === 4)) {
      throw new Error("The PIN provided is invalid.");
    }

    if (
      !countryCode ||
      typeof countryCode !== "string" ||
      countryCode.length > 2
    ) {
      throw new Error("Looks like the country code provided is valid.");
    }

    if (profilePic && typeof profilePic !== "string") {
      throw new Error("Looks like the profile pic url provided is not valid.");
    }

    if (!validateGender(gender)) {
      throw new Error("Looks like the gender provided is not valid.");
    }

    if (!validateUserType(userType)) {
      throw new Error("Looks like the user type provided is not valid.");
    }

    if (typeof firstName !== "string" || !firstName.length) {
      throw new Error("You must have a string first name. ");
    }

    if (typeof lastName !== "string" || !lastName.length) {
      throw new Error("You must have a string last name.");
    }

    if (!isPhoneNumberValid(phone)) {
      throw new Error(
        'You must provide a valid phone number that starts with a "+", followed by a country code and their number. '
      );
    }

    const country = makeCountry();
    const countryInfo = country.getCountryByCountryCode(countryCode);

    const hashedPIN = await makeHashedPassword(PIN);

    return Object.freeze({
      getId: () => id,
      getFirstName: () => firstName,
      getLastName: () => lastName,
      getGender: () => gender,
      getPIN: () => hashedPIN,
      getUserType: () => userType,
      getCountryName: () => countryInfo.name,
      getProfilePic: () => profilePic || null,
      getPhoneNumber: () => phone,
      getIdType: () => idType,
      getIdNumber: () => idNumber,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
      isVerified: () => verificationStatus,
      markVerified: () => {
        verificationStatus = true;
      },
      markUnVerified: () => {
        verificationStatus = false;
      },
    });
  };
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

export default makeProfile;
