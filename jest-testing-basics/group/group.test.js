import makeFakeGroup from "./fixtures/group";
import makeGroup from "./";

describe("group", () => {
  test("if it has a valid hash", () => {
    const group = makeFakeGroup({ hash: null });
    expect(() => makeGroup(group)).toThrow(
      new Error("Group must have a valid hash.")
    );
  });
});
