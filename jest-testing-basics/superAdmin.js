function makeId({ uuid, isUuid }) {
  return Object.freeze({
    makeId: uuid,
    isValidId: isUuid,
  });
}
let uuidv4 = () => 4;
let uuidValidate = (uuidv4) => !!uuidv4;
const Id = makeId({ uuid: uuidv4, isUuid: uuidValidate });

function buildMakeSuperAdmin({ Id }) {
  return function makeSuperAdmin({
    id = null,
    hash = Id.makeId(),
    profileId,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    if (!Id.isValidId(hash)) {
      throw new Error("SuperAdmin must have a valid hash.");
    }

    if (profileId && typeof profileId !== "number") {
      throw new Error('Super admin must have a "profileId"');
    }

    let isDeleted = false;

    return Object.freeze({
      getId: () => id,
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

const makeSuperAdmin = buildMakeSuperAdmin({ Id });

export default makeSuperAdmin;
