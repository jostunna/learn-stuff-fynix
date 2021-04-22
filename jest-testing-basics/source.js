function buildMakeSource({ isValidIp }) {
  return function makeSource({ ip, browser, referrer } = {}) {
    if (!ip) {
      throw new Error("Request source must contain an IP.");
    }
    if (!isValidIp(ip)) {
      throw new RangeError("Request source must contain a valid IP.");
    }
    return Object.freeze({
      getIp: () => ip,
      getBrowser: () => browser,
      getReferrer: () => referrer,
    });
  };
}

const isValidIp = (ip) => !!ip;

const makeSource = buildMakeSource({ isValidIp });

export default makeSource;
