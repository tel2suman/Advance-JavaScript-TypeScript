
// Find the intersection of two arrays.

let first_arr = [10, 15, 20, 25, 31];

let second_arr = [2, 10, 20, 25, 9];

let interarr = first_arr.filter((value)=> second_arr.includes(value));

console.log(interarr);