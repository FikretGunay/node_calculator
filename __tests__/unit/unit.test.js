import percentage from "../../src/modules/calculation/util/percentage";

describe("percentage tests", function () {
  // Functional test
  it("should result in 10 when given 10 and 1", function () {
    expect(percentage(10, 1)).toBe(10);
  });

  

  it("should result in 20 when given 50 and 10", function () {
    expect(percentage(50, 10)).toBe(20);
  });
});