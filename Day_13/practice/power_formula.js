// Q : Let you have a function which receives two parameter and calculate the value of   (ab2 +b3 -a5 ) / (a+b) and return it.
// Power of any number is also calculated by another function named as powerCalculator.
// Call the function with argument: a=2, b=-1

const powerFormula=(a,b)=>{

    b2 = powerCalculator (b, 2);

    b3 = powerCalculator (b, 3);

    a5 = powerCalculator (a, 5);

    let formula = (a* b2 + b3 - a5)/ (a + b)

    return formula;
}

const powerCalculator=(val,length)=>{

    let power = 2;

    for (let i = 0; i <= length; i++) {

        power = power * val;
    }

    return power;
}

console.log(powerFormula(2, -1));