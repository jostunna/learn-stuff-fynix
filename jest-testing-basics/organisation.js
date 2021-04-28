function makeId({ uuid, isUuid }) {
  return Object.freeze({
    makeId: uuid,
    isValidId: isUuid,
  });
}
let uuidv4 = () => 2;
let uuidValidate = (uuidv4) => !!uuidv4;
const Id = makeId({ uuid: uuidv4, isUuid: uuidValidate });

function buildMakeOrganisation({ Id }) {
  return function makeOrganisation({
    id = null,
    hash = Id.makeId(),
    name,
    description,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    if (!Id.isValidId(hash)) {
      throw new Error("Organisation must have a valid hash.");
    }

    if (typeof name !== "string" || !name.length) {
      throw new Error("Organisation must have a string name.");
    }

    if (typeof description !== "string" || !name.length) {
      throw new Error("Organisation must have a description.");
    }

    let isDeleted = false;

    return Object.freeze({
      getId: () => id,
      getHash: () => hash,
      getName: () => name,
      isDeleted: () => isDeleted,
      markDeleted: () => {
        isDeleted = true;
      },
      markRestored: () => {
        isDeleted = false;
      },
      getDescription: () => description,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    });
  };
}

const makeOrganisation = buildMakeOrganisation({
  Id,
});

export default makeOrganisation;
