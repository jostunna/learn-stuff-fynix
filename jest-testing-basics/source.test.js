import makeSource from "./source";

test("should throw at ip", () => {
  expect(() => makeSource()).toThrow(
    new Error("Request source must contain an IP.")
  );
});

test("should create source", () => {
  let userIp = "127.0.0.1";
  const source = makeSource({ ip: userIp });

  expect(typeof source).toBe("object");
});
