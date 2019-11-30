// https://www.codewars.com/kata/replace-with-alphabet-position/javascript

function alphabetPosition(text) {
  return text.toLowerCase().split('').filter((elem) => elem.match(/^[a-zA-Z]+$/)).map((elem) => elem.charCodeAt(0) - 96).join(' ');
}