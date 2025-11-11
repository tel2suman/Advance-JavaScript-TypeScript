// Write a program that finds the largest and smallest elements in an array.


let maximum =0;

let minimum;

const maxnum =(...numax)=>{

    for(let i of numax) {

        if (i > maximum) {

            maximum = i

        } else {

            minimum = Math.min(...numax)
        }
    }

}

maxnum(61, 899, 12, 5);

console.log(`the large number is`, maximum);

console.log(`the small number is`, minimum);