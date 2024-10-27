import { caesarCipher } from "../scripts/caesarcipher.js";

test("take a string and a shift factor and return it with each character shifted", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});
