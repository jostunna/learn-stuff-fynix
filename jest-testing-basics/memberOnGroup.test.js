import makeMemberOnGroup from "./memberOnGroup";

test("should throw", () => {
  expect(() => makeMemberOnGroup()).toThrowError();
});

test("should create member on group", () => {
  let userId = 1;
  let userGroupId = 4;
  let userMembershipId = "FXUG61122662";
  let userInitialSavingAmt = 100000;
  let userMemberId = 6;

  const memberOnGroup = makeMemberOnGroup({
    id: userId,
    groupId: userGroupId,
    membershipId: userMembershipId,
    initialSavingAmt: userInitialSavingAmt,
    memberId: userMemberId,
  });

  expect(typeof memberOnGroup).toBe("object");

  expect(memberOnGroup.getId()).toBe(1);
  expect(memberOnGroup.getGroupId()).toBe(4);
  expect(memberOnGroup.getMemberId()).toBe(6);
  expect(memberOnGroup.getInitialSavingAmt()).toBe(100000);
  expect(memberOnGroup.getAccountNumber()).toBe("FXUG61122662-4");
});
