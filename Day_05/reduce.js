// function parent (item) {
//     return item;
// }

// function child (item) {
//     return item;
// }

// console.log(parent(child("Suman")));

const abc = [2, 4, 6]

const sum = abc.reduce ((acc, x)=> acc + x, 0);

console.log(sum);

// let a = arr.reduce(function(acc,cur){
//     acc[cur] = cur.length;
//     return acc;
// }, {});


const arr = ["bannaa", "apple", "cherry", "orange"]

let bcd = arr.reduce((acc, cur)=> {

    acc[cur] = cur.length;

    return acc;

}, {})

console.log(bcd);


