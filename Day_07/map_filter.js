
// let a=[1,2,3,4,5,6,7,8]

// let b=a.filter((item)=>{
//     return item>6
// })

// console.log(b)


let a = [
  {
    name: "nill",
    number: 98765234564376,
  },

  {
    name: "Shreya",
    number: 9876234554376,
  },
  {
    name: "Arpan",
    number: 9876545674376,
  },
  {
    name: "suman",
    number: 9876543345678,
  },
];

let b = a.filter((item) => {
  return item.name.length === 5;
});

console.log(b)

let m = a.map((item)=>{

    if (item.name ==="Shreya") {

        return { ...item, name: "kapil" };
    }

    return item
})

console.log(m);

let x = a.forEach((item) => {
  if (item.name === "Shreya") {
    return { ...item, name: "kapil" };
  }

  return item;
});

console.log(a);