
let min = 10;

let max = 20;

let count = 5;

let random = [];

for (let i = 0; i < count; i++) {
  
  let newrandom = Math.floor(Math.random() * max - min + 1) + min;

  random.push(newrandom);
}

console.log(`random numbers betwwen ${max} & ${min}`, random);