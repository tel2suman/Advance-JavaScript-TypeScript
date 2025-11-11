
// Write a program that calculates the sum of digits of a number using a loop (e.g., 123 → 1+2+3 = 6).

let sum = 0;

const sumDigit = (...obj)=>{

    for (let i of obj) {

        sum = sum + i;
    }
}

sumDigit(1,2,3)

console.log(sum);