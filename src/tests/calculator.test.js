import { calculator } from "../scripts/calculator.js";

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 1 - 2 to equal -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("divide 1 / 2 to equal 0.5", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("multiply 2 * 3 to equal 6", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
