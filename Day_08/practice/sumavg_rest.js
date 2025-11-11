
// Write a program to find the sum and average of all numbers in an array.


let avg = 0;

const sumAvg = (...val)=> {

    for (let i of val) {

        avg = ( avg + i / 2 );

    }
}

sumAvg(20, 50, 40, 30, 60, 70, 80);

console.log(avg);