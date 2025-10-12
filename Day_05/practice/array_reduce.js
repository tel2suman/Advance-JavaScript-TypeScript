let num = [5, 7, 11, 17, 5, 22, 21, 11, 21, 31, 5, 17, 31, 41, 43, 44, 44];

const newarr = num.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);

console.log(`the newly array values are`, newarr);

