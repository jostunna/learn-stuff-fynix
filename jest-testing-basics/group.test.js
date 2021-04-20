import makeGroup from "./group";

test("should create group", () => {
  let groupId = 2;
  let groupName = "abalimi";
  let groupPurpose = "saving";
  let groupAdress = "kiryandongo";
  let groupMeetingFrequency = 3;
  let groupFirstMeeting = "20-04-2021";
  let groupCashOutDate = "20-09-2021";
  let groupSharePrice = 300000;
  let groupMinShare = 100000;
  let groupMaxShare = 500000;
  let groupLoanMinShares = 20000;
  let groupLoanMonthlyInterest = 0.05;
  let groupLoanLendingLimit = 5;
  let groupLoanMaxDuration = 4;
  let groupEmmContAmt = 10000;
  let groupEmmFrequency = 5;
  let groupFinesDestination = "emmergencies";
  let groupOrganizationId = 34;

  const group = makeGroup({
    id: groupId,
    name: groupName,
    purpose: groupPurpose,
    address: groupAdress,
    meetingFrequency: groupMeetingFrequency,
    firstMeeting: groupFirstMeeting,
    cashOutDate: groupCashOutDate,
    sharePrice: groupSharePrice,
    minShare: groupMinShare,
    maxShare: groupMaxShare,
    loanMinShares: groupLoanMinShares,
    loanMonthlyInterest: groupLoanMonthlyInterest,
    loanLendingLimit: groupLoanLendingLimit,
    loanMaxDuration: groupLoanMaxDuration,
    emmContAmt: groupEmmContAmt,
    emmFrequency: groupEmmFrequency,
    finesDestination: groupFinesDestination,
    organisationId: groupOrganizationId,
  });

  expect(typeof group).toBe("object");

  expect(group.getId()).toBe(2);
  expect(group.getName()).toBe("abalimi");
  expect(group.getPurpose()).toBe("saving");
  expect(group.getAddress()).toBe("kiryandongo");
  expect(group.getAlreadyOperating()).toBe(false);
  expect(group.getMeetingFrequency()).toBe(3);
  expect(group.getSharePrice()).toBe(300000);
  expect(group.getMinShare()).toBe(100000);
  expect(group.getMaxShare()).toBe(500000);
  expect(group.getLoanMinShares()).toBe(20000);
  expect(group.getLoanMonthlyInterest()).toBe(0.05);
  expect(group.getLoanLendingLimit()).toBe(5);
  expect(group.getLoanMaxDuration()).toBe(4);
  expect(group.getEmmContAmt()).toBe(10000);
  expect(group.getEmmFrequency()).toBe(5);
  expect(group.getFinesDestination()).toBe("emmergencies");
  expect(group.getOrganisationId()).toBe(34);
  expect(group.isActive()).toBe(true);
});

test("should throw", () => {
  expect(() => makeGroup()).toThrowError();
});
