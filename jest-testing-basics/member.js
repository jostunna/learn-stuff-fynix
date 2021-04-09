function buildMakeMember({
  Id,
  makeCountry,
  isPhoneNumberValid,
  validateIdentification,
  makeMembership,
}) {
  return async function makeMember({
    id = null,
    hash = Id.makeId(),
    countryCode,
    occupation = "peasant",
    membershipNumber,
    isAdmin = true,
    profileId,
    nextOfKinFirstName,
    nextOfKinLastName,
    relationshipWithMember,
    nextOfKinIdType,
    nextOfKinIdNumber,
    nextOfKinPhone,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    if (!Id.isValidId(hash)) {
      throw new Error("Member must have a valid hash.");
    }

    if (typeof isAdmin !== "boolean") {
      throw new Error("Member must have a valid 'isAdmin' property ");
    }

    if (!profileId || typeof profileId !== "number") {
      throw new Error('Member must have a "profileId"');
    }

    if (
      !countryCode ||
      typeof countryCode !== "string" ||
      countryCode.length > 2
    ) {
      throw new Error("Looks like the country code provided is valid.");
    }

    if (typeof occupation !== "string" || !occupation.length) {
      throw new Error("Member must have an occupation.");
    }

    if (
      typeof relationshipWithMember !== "string" ||
      !relationshipWithMember.length
    ) {
      throw new Error("Next of kin must have a relationship with the member. ");
    }

    if (typeof nextOfKinFirstName !== "string" || !nextOfKinFirstName.length) {
      throw new Error("Next of kin must have a string first name. ");
    }

    if (typeof nextOfKinLastName !== "string" || !nextOfKinLastName.length) {
      throw new Error("Next of kin must have a string last name.");
    }

    if (!isPhoneNumberValid(nextOfKinPhone)) {
      throw new Error(
        'Next of kin must have a valid phone number that starts with a "+", followed by a country code and their number. '
      );
    }

    if (
      !validateIdentification({
        idType: nextOfKinIdType,
        idNumber: nextOfKinIdNumber,
      })
    ) {
      throw new Error(
        "Could not verify universal identification records for next of kin."
      );
    }

    const country = makeCountry();
    const countryInfo = country.getCountryByCountryCode(countryCode);

    const membership = makeMembership();

    let membershipId;

    if (membershipNumber) {
      if (!membership.isValidMembershipId(membershipNumber)) {
        throw new Error('The "MembershipNumber" provided is not valid.');
      } else {
        membershipId = membershipNumber;
      }
    } else {
      membershipId = membership.makeMembershipId(countryInfo.code);
    }

    return Object.freeze({
      getId: () => id,
      getHash: () => hash,
      getOccupation: () => occupation,
      getMembershipId: () => membershipId,
      getProfileId: () => profileId,
      isMemberAdmin: () => isAdmin,
      getNextOfKinFirstName: () => nextOfKinFirstName,
      getNextOfKinLastName: () => nextOfKinLastName,
      getNextOfKinIdType: () => nextOfKinIdType,
      getNextOfKinIdNumber: () => nextOfKinIdNumber,
      getNextOfKinRelationshipWithMember: () => relationshipWithMember,
      getNextOfKinPhoneNumber: () => nextOfKinPhone,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    });
  };
}

module.exports = buildMakeMember;
