
// Write a function that finds the maximum number from an array using the spread operator.

let arr = [ 52, 5, 32, 899, 3]

let maximum;

const maxNum =(numax)=> {

    maximum = Math.max(...numax)
}

maxNum(arr);

console.log(maximum);