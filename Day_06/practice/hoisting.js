
// hoisting with var

// console.log(a);

// var a = 5;  // this results is undefined

// variable hoisting with let

// console.log(hoist);

// let hoist = 10; //ReferenceError: Cannot access 'hoist' before initialization

// variable hoisting with arrow functions

// greetings(); //Cannot access 'greetings' before initialization

// const greetings = () => {

//     console.log("hello, I am Suman");
// }


greet = () => {
    console.log("hello, I am Suman");
}

greet();

{
    console.log(y)

    const y = 7;
}