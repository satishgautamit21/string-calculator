import { StringCalculator } from './stringCalculator';

describe("add", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
});
