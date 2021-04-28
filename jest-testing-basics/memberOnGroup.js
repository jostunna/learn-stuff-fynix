const countries = [
  { name: "Uganda", dial_code: "+256", code: "UG" },
  { name: "Kenya", dial_code: "+254", code: "KE" },
  { name: "Tanzania, United Republic of", dial_code: "+255", code: "TZ" },
  { name: "Rwanda", dial_code: "+250", code: "RW" },
];

const findCountryByCode = (code) =>
  countries.find((country) => country.code === code);

const makeCountry = function () {
  return Object.freeze({
    getCountryByCountryCode: (countryCode) => {
      const country = findCountryByCode(countryCode);
      if (!country) {
        throw new Error("The country code provided does not exist.");
      }
      return country;
    },

    isValidCountry: (countryCode) => !!findCountryByCode(countryCode),
  });
};

const INITIALS = "FX";

const makeMembership = function () {
  return Object.freeze({
    makeMembershipId: (countryCode) =>
      `${INITIALS}${countryCode}${uniqueMembershipId}`,

    isValidMembershipId: (membershipId) => {
      const first2Chars = membershipId.slice(0, 2);
      const countryCode = membershipId.slice(2, 4);
      const restOfNo = membershipId.slice(4);

      const country = makeCountry();

      if (!country.isValidCountry(countryCode)) {
        throw new Error(
          'The country code in "MembershipId" provided is not valid.'
        );
      }

      return (
        first2Chars === INITIALS && !isNaN(restOfNo) && restOfNo.length === 8
      );
    },
  });
};

const length = 8;
const timestamp = +new Date();

const genRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeUniqueMembershipId = function () {
  return Object.freeze({
    generate: () => {
      const ts = timestamp.toString();
      const parts = ts.split("").reverse();
      let id = "";

      for (let i = 0; i < length; ++i) {
        const index = genRandomInt(0, parts.length - 1);
        id += parts[index];
      }

      return id;
    },
  });
};

const uniqueMembershipId = makeUniqueMembershipId().generate();

function buildMakeMemberOnGroup({ makeMembership }) {
  return function makeMemberOnGroup({
    id = null,
    groupId,
    membershipId,
    initialSavingAmt,
    memberId,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    if (typeof groupId !== "number") {
      throw new Error('Provide a valid "groupId".');
    }

    if (typeof memberId !== "number") {
      throw new Error('Provide a valid "memberId".');
    }

    if (typeof initialSavingAmt !== "number") {
      throw new Error('Provide a valid "initialSavingAmt".');
    }

    const membership = makeMembership();

    if (!membership.isValidMembershipId(membershipId)) {
      throw new Error('The "MembershipId" provided is not valid.');
    }

    const accountNumber = `${membershipId}-${groupId}`;

    return Object.freeze({
      getId: () => id,
      getGroupId: () => groupId,
      getMemberId: () => memberId,
      getInitialSavingAmt: () => initialSavingAmt,
      getAccountNumber: () => accountNumber,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    });
  };
}

const makeMemberOnGroup = buildMakeMemberOnGroup({
  makeMembership,
});

export default makeMemberOnGroup;
