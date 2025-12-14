
let obj = {

    name: "Suman",
    age: 30,
}

let swapped = {};

for (let i in obj) {

    swapped[obj[i]] = i;
}

console.log(swapped);