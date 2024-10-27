export function analyzeArray(array) {
  const obj = {
    average: null,
    min: null,
    max: null,
    length: null,
  };

  //Calculate the average
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  obj.average = sum / array.length;

  //Calculate the min and max
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }

  obj.min = min;
  obj.max = max;

  //Calculate the length
  obj.length = array.length;

  return obj;
}
