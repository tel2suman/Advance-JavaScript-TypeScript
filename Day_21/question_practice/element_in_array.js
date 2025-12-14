// Count how many times a given element appears in an array.

const elementTimes = (arr, item)=>{

    return arr.filter(element => (element === item)).length;
}

const myArray = [1, 2, 3, 2, 1, 2, 3, 1];

console.log(elementTimes(myArray, 2));