
const namerest =(...arr)=>{
    return arr.find((item)=>{
        return item < 4;
    })
}

console.log(namerest(5,3,2,1,3,4));

// const namerest2=(...arrr)=>{
//     return arrr.find((item)=>{
//         return item > 4*4;
//     })
// }

// console.log(namerest2(23, 2, 34, 5, 6));

let b;

function name1(...array) {

  b = array;

}

name1(12, 13, 24, 34, 44, 54);

for (let i of b) {

  if (i % 2 != 0) {

    console.log(i);
  }
}