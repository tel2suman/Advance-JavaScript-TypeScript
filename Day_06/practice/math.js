let numbers = [61, 899, 12, 115];

let max = 0;

let minimum;

const maxNum = (numax) => {

  for (i of numax) {

    if (i > max) {

      max = i;
    }
    
    else {

      minimum = Math.min(...numax)

    }
  }
};

maxNum(numbers);

console.log(max);

console.log(minimum);
