
// Implement a function that returns an updated array with right rotations on an array of integers.

// Given the following array: [2,3,4,5,7]

let arrlist = [2, 3, 4, 5, 7];


const rotationOnRight=()=>{

    for (let i = 0; i < arrlist.length; i++) {

        rotatevalue = arrlist.pop();

        arrlist.unshift(rotatevalue)

        console.log(rotatevalue);
    }
}

rotationOnRight();
