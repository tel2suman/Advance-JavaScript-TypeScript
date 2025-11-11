
let numbers = [61, 899, 112];

let max = 0;

let minimum;

const maxnum =(numax)=>{

    for (let i of numax) {

        if (i > max) {

            max = i

        } else {

            minimum = Math.min(...numax)
        }

    }
};

maxnum(numbers);

console.log(max);

console.log(minimum);