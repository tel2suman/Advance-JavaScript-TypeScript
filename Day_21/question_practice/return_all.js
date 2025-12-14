
// Return all elements that appear more than once in an array.

let numbers = [5, 7, 11, 5, 22, 21, 11, 31, 5, 17];

let count=numbers.filter((value,index)=>{

    return numbers.indexOf(value)!==index;
})

console.log(count);

