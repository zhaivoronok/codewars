// https://www.codewars.com/kata/iterative-rotation-cipher/javascript

const IterativeRotationCipher = {};

IterativeRotationCipher.encode = function(n, str) {
  let spaces = [];

  str.split('').forEach((e, index) => {
    if (e === ' ') spaces.push(index);
  });

  for (let i = 0; i < n; i++) {

    str = str.split('').filter((e) => e !== ' ').map((e, index, array) => {
      if (index < n) {
        index += array.length - n;
        while (index < 0) index += array.length;
        return array[index];
      } else {
        return array[index - n];
      }
    });

    spaces.forEach((e) => {
      str.splice(e, 0, ' ');
    });

    str = str.join('').split(' ').map((e) => {
      return e.split('').map((e, index, array) => {
        if (index < n) {
          index += array.length - n;
          while (index < 0) index += array.length;
          return array[index];
        } else {
          return array[index - n];
        }
      }).join('');
    }).join(' ');

  }

  return `${n} ${str}`;
};

IterativeRotationCipher.decode = function(str) {
  let n = +str.split(' ')[0];

  let spaces = [];

  str = str.split(' ');
  str.splice(0, 1);
  str = str.join(' ');

  str.split('').forEach((e, index) => {
    if (e === ' ') spaces.push(index);
  });

  for (let i = 0; i < n; i++) {

    str = str.split(' ').map((e) => {
      return e.split('').map((e, index, array) => {
        while (index + n >= array.length) index -= array.length;
        return array[index + n];
      }).join('');
    }).join('');

    str = str.split('').filter((e) => e !== ' ').map((e, index, array) => {
      while (index + n >= array.length) index -= array.length;
      return array[index + n];
    });

    spaces.forEach((e) => {
      str.splice(e, 0, ' ');
    });

    str = str.join('');

  }

  return str;
};