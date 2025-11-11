
// Write a program that iterates through an array of numbers and prints only the odd numbers using a for...of loop.


let oddnum = 0;

let evennum = 0;

const valNum = (...val) => {

  for (let i of val) {

    if (i % 2 === 0) {

      evennum = i;

    } else if (i % 2 !== 0) {

      oddnum = i;

    }
        console.log(`the even numbers are`, evennum);

        console.log(`the odd numbers are`, oddnum);
    }
};

valNum(4, 5, 6, 8, 11, 15, 20, 22, 23);
