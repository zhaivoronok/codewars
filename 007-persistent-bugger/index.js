// https://www.codewars.com/kata/persistent-bugger/javascript

function persistence(num) {
  let result = 0;

  while (num.toString().length > 1) {
    let numTemp = num.toString();

    for (let i = 0; i < numTemp.length; i++) {
      i === 0 ? num = numTemp[i] : num *= numTemp[i];
    }

    result++;
  }

  return result;
}