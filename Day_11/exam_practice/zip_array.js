
let a = [1, 2, 3];

let b = ['a', 'b', 'c'];

// using for loop method

function zippedArray(){

    let result = [];

    for (let i = 0; i < Math.min(a.length , b.length); i++) {

        result.push([a[i], b[i]]);
    }

    return result;
}

zippedArray(a, b);

console.log(zippedArray());

// using map method

const zippedArray=()=>{

    return a.map((element, index)=>

    [element, b[index]]);
}

zippedArray(a, b);

console.log(zippedArray());