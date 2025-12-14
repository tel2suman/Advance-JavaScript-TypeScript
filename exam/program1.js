// Write a function that takes an unknown number of arguments using the rest parameter and returns their sum.

let totalsum = 0;

const sum =(...numbers)=> {

    for (let num of numbers) {

        totalsum +=num;
    }
    console.log(totalsum);
}

sum(1, 2, 3);