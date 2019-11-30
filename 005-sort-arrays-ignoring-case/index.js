// https://www.codewars.com/kata/sort-arrays-ignoring-case/javascript

sortme = function(names){
  return names.sort((a, b) => a.toLowerCase() > b.toLowerCase());
};