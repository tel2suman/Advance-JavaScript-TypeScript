//Random Numbers Without Repetition

let min = 15;

let max = 35;

let count = 6;

let unique = new Set();

for (let i = 0; i <= count; i++) {
  let newr = Math.floor(Math.random() * (max - min + 1)) + min;

  unique.add(newr);
}

console.log(`the new arrays between ${max} & ${min} : ${[...unique]}`);
