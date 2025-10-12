
let nums = [4, 5, 6, 8, 11, 15, 20, 22, 23]

let oddnum = 0;

let evennum = 0;

const oddNum =(val)=> {

    for (let i of val) {

        if (i % 2 !==0) {

            oddnum = i;

            console.log(`the odd number is ${oddnum}`)

        } else if (i % 2 === 0) {

            evennum = i;

            console.log(`the even number is ${evennum}`)
        }
    }
}

oddNum(nums);