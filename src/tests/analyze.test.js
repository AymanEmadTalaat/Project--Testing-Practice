import { analyzeArray } from "../scripts/analyze.js";

test("takes an array of numbers and returns an object with: average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
