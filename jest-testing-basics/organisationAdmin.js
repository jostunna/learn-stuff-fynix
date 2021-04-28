function makeId({ uuid, isUuid }) {
  return Object.freeze({
    makeId: uuid,
    isValidId: isUuid,
  });
}
let uuidv4 = () => 2;
let uuidValidate = (uuidv4) => !!uuidv4;
const Id = makeId({ uuid: uuidv4, isUuid: uuidValidate });

function buildMakeOrganisationAdmin({ Id }) {
  return function makeOrganisationAdmin({
    id = null,
    hash = Id.makeId(),
    organisationId,
    profileId,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    if (!Id.isValidId(hash)) {
      throw new Error("OrganisationAdmin must have a valid hash.");
    }

    if (organisationId && typeof organisationId !== "number") {
      throw new Error('OrganisationAdmin must have an "organisationId"');
    }

    if (profileId && typeof profileId !== "number") {
      throw new Error('Organisation admin must have a "profileId"');
    }

    let isDeleted = false;

    return Object.freeze({
      getId: () => id,
      getOrganisationId: () => organisationId,
      getHash: () => hash,
      isDeleted: () => isDeleted,
      markDeleted: () => {
        isDeleted = true;
      },
      markRestored: () => {
        isDeleted = false;
      },
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    });
  };
}

const makeOrganisationAdmin = buildMakeOrganisationAdmin({ Id });

export default makeOrganisationAdmin;
