// https://www.codewars.com/kata/meeting/javascript

function meeting(s) {

  let splittedIn = [];
  s.toUpperCase().split(';').forEach((elem) => {
    splittedIn.unshift(elem.split(':').reverse().join(', '));
  });

  return `(${splittedIn.sort().join(')(')})`;

}