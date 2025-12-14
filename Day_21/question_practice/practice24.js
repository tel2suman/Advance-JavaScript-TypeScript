
// Write a program to count how many times a specific word occurs in a paragraph using split()

// let str = "I am not gonna live forever, but I wanna live while I am alive",

// split = str.split(" "),

// count = {};

// for (let i = 0; i < split.length; i++) {

//   if (count[split[i]] === undefined) {

//     count[split[i]] = 1;

//   } else {

//     count[split[i]]++;
//   }
// }

// console.log(count);

let para = "I am not gonna live forever, but I wanna live while I am alive";

let char_spilt = para.split(" ");

let word_count = {};

const countString = () => {

  for (let i = 0; i < char_spilt.length; i++) {

    word_count[char_spilt[i]] === undefined || null

    ? word_count[char_spilt[i]] = 1 : word_count[char_spilt[i]]++;

    console.log(word_count);
  }

};

countString();

