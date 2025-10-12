
let num = [20, 50, 40, 30, 60, 70, 80]

let avg = 0;

const sumAvg=(val)=> {

    for (let i of val) {

        avg = (avg + i / 2);
    }

}

sumAvg(num);

console.log(avg);