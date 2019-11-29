// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
  let range = [];

  intervals.forEach(e => {
    for (let i = e[0]; i < e[1]; i++) {
      range.push(i);
    }
  });

  return [...new Set(range)].length;
}