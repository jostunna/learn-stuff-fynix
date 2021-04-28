import makeOwnerOnGroup from "./ownerOnGroup";

test("should throw at management role", () => {
  expect(() => makeOwnerOnGroup()).toThrow(
    new Error("Invalid Group management role.")
  );
});

test("should create owner on group", () => {
  let userId = 1;
  let userGroupId = 4;
  let userManagementRole = "admin";
  let userMemberId = 3;

  const ownerOnGroup = makeOwnerOnGroup({
    id: userId,
    groupId: userGroupId,
    managementRole: userManagementRole,
    memberId: userMemberId,
  });

  expect(typeof ownerOnGroup).toBe("object");

  expect(ownerOnGroup.getId()).toBe(1);
  expect(ownerOnGroup.getGroupId()).toBe(4);
  expect(ownerOnGroup.getMemberId()).toBe(3);
  expect(ownerOnGroup.getManagementRole()).toBe("admin");
});
