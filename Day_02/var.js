// let a=12
//  a=23

//  console.log(a)

// var a = 12;
// var a = 23;

// console.log(a);

// const a = 12;

// console.log(a);

// function hello() {

//   {
//      var a = 12;

//     console.log(a);
//   }

//   console.log(a);
// }

// console.log(a)

// hello();

// {
//   let a = 12;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// function hello() {
//   {
//     console.log(a);
//   }

//   console.log(a);
// }

// hello();

// console.log(a);

// let a=[1,2,3,4,5,6]
// // console.log(a[0])

// let [b]=a
// console.log(b)

// let a = { name: "chinmay", age: 23, skills: ["python", "javascript"] };

// console.log(a.name)

let a = [
  { name: "chinmay", age: 23, skills: ["python", "javascript"] },
  { name: "poorva", age: 22, skills: ["python", "javascript"] },
  { name: "sarika", age: 21, skills: ["python", "javascript"] },
  { name: "ram", age: 24, skills: ["python", "javascript"] },
  { name: "sham", age: 25, skills: ["python", "javascript"] },
];

let [, , , b] = a;
console.log(b.name);


