// Write a program that reverses a string without using loops (only string methods).

let str ="I am a good boy";

const revWord = (str)=>{

    return [...str].reverse().join("");
};

console.log(revWord(str));

