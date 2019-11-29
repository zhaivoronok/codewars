// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {

  let splittedIn = [];
  s.toUpperCase().split(';').forEach((elem) => {
    splittedIn.unshift(elem.split(':').reverse().join(', '));
  });

  return `(${splittedIn.sort().join(')(')})`;

}