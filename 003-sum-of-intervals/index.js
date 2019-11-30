// https://www.codewars.com/kata/sum-of-intervals/javascript

function sumIntervals(intervals) {
  let range = [];

  intervals.forEach(e => {
    for (let i = e[0]; i < e[1]; i++) {
      range.push(i);
    }
  });

  return [...new Set(range)].length;
}