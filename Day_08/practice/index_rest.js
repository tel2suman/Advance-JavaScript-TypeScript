
// Write a program to find the index of the first occurrence of a given element in an array.

const firstIndex =(...f)=> {

    let numi = f.indexOf(15);

    console.log(numi);
}

firstIndex(15, 35, 20, 55, 65, 70, 89, 100);