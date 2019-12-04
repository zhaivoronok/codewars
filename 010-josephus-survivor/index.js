// https://www.codewars.com/kata/josephus-survivor/javascript

function josephusSurvivor(n, k) {
  let array = new Array(n);

  for (let i = 0; i < n; i++) {
    array[i] = i + 1;
  }

  for (let i = k - 1; array.length > 1; i += k - 1) {
    while (i > array.length - 1) {
      i -= array.length;
    }

    array.splice(i, 1);
  }

  return array[0];
}