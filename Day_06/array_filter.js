
// let a="Nill"

// let b=a.includes("i")

// console.log(b)

// let a = [1, 3, 4, 5, 6, 7, 8];
// let b = a.indexOf(3);
// console.log(b);

// let arr = [10, 20, 30, 40, 10, 50, 60, 50];
// let a = arr.filter((num, index) => {
//   if (arr.indexOf(num) == index) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(a);

// const arr = [10, 20, 50, 20, 10, 60];

// const a = arr.reduce((acc, cur, index) => {
//   if (arr.indexOf(cur) === index) acc.push(cur);
//   return acc;
// }, []);

// console.log(a);

// let a = [1, 2, 3, 4, 5, 5, 6, 7];

// let b = new Set(a);

// console.log([...b]);

// let a="Nill"

// let b=[...a]

// console.log(b)

// let a = (item) => {
//   for (let i in item) {
//     console.log(item);
//   }
// };

// a([1, 2, 3, 4, 5, 6, 7]);

// let w = [1, 2, 3, 4, 5, 5, 6, 7];

// const a = w.reduce((acc, cur, index, a) => {
// console.log(a)
// }, []);

// console.log(a);

let arr = [32, 34, 33, 42, 67, 70, 77, 33];

let box = [];

const newbox = (item) => {
  for (let i of item) {
    if (!box.includes(i)) {
      box.push(i);
    }
  }
  return box;
};

console.log(newbox(arr));
