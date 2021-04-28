function buildMakeOwnerOnGroup() {
  return function makeOwnerOnGroup({
    id = null,
    groupId,
    managementRole,
    memberId,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = {}) {
    const isValidRole = (role) => {
      const ADMIN = "admin";
      const SECRETARY = "secretary";
      return [ADMIN, SECRETARY].includes(role);
    };

    if (!isValidRole(managementRole)) {
      throw new Error("Invalid Group management role.");
    }

    if (typeof groupId !== "number") {
      throw new Error('Provide a valid "groupId".');
    }

    if (typeof memberId !== "number") {
      throw new Error('Provide a valid "memberId".');
    }

    return Object.freeze({
      getId: () => id,
      getGroupId: () => groupId,
      getMemberId: () => memberId,
      getManagementRole: () => managementRole,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    });
  };
}

const makeOwnerOnGroup = buildMakeOwnerOnGroup();

export default makeOwnerOnGroup;
