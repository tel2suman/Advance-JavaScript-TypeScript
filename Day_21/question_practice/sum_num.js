//Sum all numbers in an array.

let numarr = [1, 2, 3, 4, 5, 6];

sum = 0;

const sumDigit = (val)=> {

    for (let i of val) {

        sum = sum + i;
    }

}

sumDigit(numarr);

console.log(sum);