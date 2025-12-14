
// Create a program where you use a default parameter to calculate compound interest (default interest rate if not provided).

let principal = 175000;

let roi = 5.6;

let years = 3;

const compoundInterest = ()=>{

    let coumpute = principal * Math.pow(1 + roi / 100, years).toFixed(2);

    let CRI = coumpute - principal;

    console.log(CRI)
}

compoundInterest();