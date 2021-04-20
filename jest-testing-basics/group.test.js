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
});
