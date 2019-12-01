// https://www.codewars.com/kata/who-has-the-most-money/javascript

function mostMoney(students) {
  let result = 0;
  let name = 'all';

  students.forEach((elem) => {
    let sum = 0;

    sum += elem.fives * 5;
    sum += elem.tens * 10;
    sum += elem.twenties * 20;

    if (result < sum) {
      result = sum;
      name = elem.name;
    } else if (result === sum) {
      name = 'all';
    }
  });

  return name;
}