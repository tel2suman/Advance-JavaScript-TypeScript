
let digit = [1, 2, 3];

let sum = 0;

const sumDigit =(val)=>{

    for (let i of val) {

        sum = sum + i;

    }
}

sumDigit(digit);

console.log(sum);