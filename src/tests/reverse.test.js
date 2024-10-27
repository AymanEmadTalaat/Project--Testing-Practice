import { reverseString } from "../scripts/reverse.js";

test("return a reversed string", () => {
  expect(reverseString("hello world")).toMatch(/dlrow olleh/);
});
