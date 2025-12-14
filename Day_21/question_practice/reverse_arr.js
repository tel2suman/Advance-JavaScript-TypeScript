//Reverse an array without using .reverse().

let newArr = [];

function revArray(str) {

    for (let i = str.length - 1; i >= 0; i--) {

        newArr.push(str[i]);
    }

    console.log(newArr);
}

revArray([1, 2, 3, 4, 5]);