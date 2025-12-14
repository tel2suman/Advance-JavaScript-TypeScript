
let numarr = [25, 5, 52];

let max = 1;

let minimum;

const maxNum = (numax)=>{

    for (let i of numax) {

        if (i > max) {

            max = i

        } else {

            minimum = Math.min(...numax);
        }

    }
}

maxNum(numarr);

console.log(max);

console.log(minimum);
