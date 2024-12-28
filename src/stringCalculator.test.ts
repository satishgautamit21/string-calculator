import { StringCalculator } from './stringCalculator';

describe("add", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("returns the number for a single input", () => {
    expect(calculator.add("1")).toBe(1);
  });

  it("returns the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  it("returns the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  it("supports new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it("supports delimiters of any length", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  it("throws error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
  });
});
