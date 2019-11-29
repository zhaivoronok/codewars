// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  let numArray = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
      numArray.push(i);
    }
  }

  return numArray.reduce((sum, e) => sum + e, 0);
}