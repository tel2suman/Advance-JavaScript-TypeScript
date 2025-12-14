let arr = [22, 899, 25, 10, 5];

let maximum = 1;

let minimum;

const maxNum = (numax)=>{

    for (let i of numax) {

        if (i > maximum) {

            maximum = i

        } else {

           minimum = Math.min(...numax);

        }
    }
}

maxNum(arr);

console.log(maximum);

console.log(minimum);