

// Write a function that takes two numbers and a callback function, and applies the callback to those numbers (e.g., addition, subtraction).

const calculation =()=>{

    let num1 = 10;

    let num2 = 20;

    return callBack(num1, num2);
}

const callBack =(val1, val2)=>{

    return val1 + val2;

}

console.log(calculation());