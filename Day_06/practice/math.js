let numbers = [61, 89, 12, 115];

let max = 0;

let minimum;

const maxNum = (numax) => {
  for (i of numax) {
    if (i > max) {
      max = i;
    }
    else if (Math.min(...numax)) {
      minimum = i;
    }
  }
};

maxNum(numbers);

console.log(max);

console.log(minimum);
