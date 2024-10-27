import { capitalize } from "../scripts/capitalize.js";

test("returns a string with the first character capitalized", () => {
  expect(capitalize("hello world")).toMatch(/Hello world/);
});
