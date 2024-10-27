export function capitalize(string) {
  let arr = string.split("");

  arr[0] = arr[0].toUpperCase();

  arr = arr.join("");

  return arr;
}
