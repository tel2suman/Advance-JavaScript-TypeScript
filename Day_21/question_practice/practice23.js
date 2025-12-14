
// Write a program to check if one string is a substring of another using includes().

let para = "Hello world, welcome to the universe";

let para2 ="dont do any"

const chkString=(val)=>{

    for (let char of val) {

        para.includes(char.toLowerCase())
          ? console.log("yes, true")
          : console.log("No! false");
    }
}

chkString(para2);