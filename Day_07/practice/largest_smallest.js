
let assign = [13, 166, 12, 10, 75, 50, 100, 232, 121, 105, 298, 785, 421, 365, 215]

let max = 0;

let minimum;


const largeNum =(num)=>{

    for (let l of num) {

        if (l > max) {

            max = l

        }

        else {

            minimum = Math.min(...num)
        }

    }

}

largeNum(assign);

console.log("The Large Number is", max , "The Small Number is", minimum);