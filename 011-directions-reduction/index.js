// https://www.codewars.com/kata/directions-reduction/javascript

function dirReduc(arr) {
  let opposite = (array, index) => {
    if (
        array[index] === 'SOUTH' && array[index + 1] === 'NORTH' ||
        array[index] === 'NORTH' && array[index + 1] === 'SOUTH' ||
        array[index] === 'WEST'  && array[index + 1] === 'EAST'  ||
        array[index] === 'EAST'  && array[index + 1] === 'WEST'
    ) return true;
  };

  for (let i = 0; i < arr.length; i++) {
    arr.forEach((e, index) => {
      if (opposite(arr, index)) arr.splice([index], 2);
    });
  }

  return arr;
}