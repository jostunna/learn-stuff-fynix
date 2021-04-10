const sumSalaries = require("./sumSalaries");

test("should return 7700", () => {
  let company = {
    sales: [
      { name: "John", salary: 1000 },
      { name: "Alice", salary: 1600 },
    ],
    development: {
      sites: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],
      internals: [{ name: "Jack", salary: 1300 }],
    },
  };

  expect(sumSalaries(company)).toBe(7700);
});
