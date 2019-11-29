// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  return text.toLowerCase().split('').filter((elem) => elem.match(/^[a-zA-Z]+$/)).map((elem) => elem.charCodeAt(0) - 96).join(' ');
}