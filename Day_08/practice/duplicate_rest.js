
// Write a program that removes all duplicate elements from an array.

const dupArr =(...a)=>{

    let numberset = new Set(a);

    let uniquenumbers = [...numberset]

    console.log(uniquenumbers);
}

dupArr(10, 20, 30, 50, 40, 30, 60, 50, 90, 30);
