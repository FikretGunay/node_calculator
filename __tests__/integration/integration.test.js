import numberCruncher from "../../src/modules/calculation/numberCruncher";

describe("numberCruncher integration tests", function () {
  // Functional test
  it("should return 22.5 given 45 and 2", function () {
    const calcObject = { numOne: 45, numTwo: 2, operator: "percentage" };
    const result = numberCruncher(calcObject);
    expect(result).toBe(22.5);
  });
});