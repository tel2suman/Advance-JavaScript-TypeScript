
// Merge two sorted arrays into a single sorted array.

let arr1 = [10, 15, 21, 85, 63, 52, 11];

let arr2 = [55, 62, 72, 33, 25, 15, 5];

let combinedarr = [...arr1,...arr2];

let sortarr = combinedarr.sort((a , b)=>(a - b))

console.log(sortarr);