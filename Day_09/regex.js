 const str1 = "Hello hello";
 const regex1 = /hello/gi;

 console.log(str.match(regex1));

let str3 = "2022:22.4";
let b = str3.split(/[:.]/); //using regex
console.log(b);

const str = "apple banana Apple";
const regex = /apple/gi;

const matches = str.matchAll(regex);
console.log(matches);

for (const match of matches) {
  console.log(match[0]);
}