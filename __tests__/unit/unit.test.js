import percentage from "../../src/modules/calculation/util/percentage";

describe("percentage tests", function () {
  // Functional test
  it("should result in 5000 when given 500 and 10", function () {
    expect(percentage(500, 10)).toBe(5000);
  });

  

  it("should result in 500 when given 50 and 10", function () {
    expect(percentage(50, 10)).toBe(500);
  });
});