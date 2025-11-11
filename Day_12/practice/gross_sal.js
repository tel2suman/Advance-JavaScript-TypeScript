// Write a JS program to input basic salary of an employee and calculate
// gross salary according to given conditions.
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary is between 10001 to 20000 : HRA = 25%, DA = 90%
// Basic Salary >= 20001 : HRA = 30%, DA = 95%



let hra;

let da;

const grossSal=(basic_salary)=> {

    if (basic_salary <= 10000) {

      hra = 0.20 * basic_salary;

      da = 0.80 * basic_salary;


    } else if (basic_salary >= 10001 && basic_salary <= 20000) {

      hra = 0.25 * basic_salary;

      da = 0.90 * basic_salary;


    } else if (basic_salary >= 20001) {

      hra = 0.30 * basic_salary;

      da = 0.95 * basic_salary;

    }

    else {

        return false;
    }

    const gross_salary = basic_salary + hra + da;

    return gross_salary;

}

// case 1:

const basicpay1 = 9900;

const grosspay1  = grossSal(basicpay1);

console.log(`for ${basicpay1} your gross salary wil be ${grosspay1}`);


// case 2:

const basicpay2 = 15600;

const grosspay2 = grossSal(basicpay2);

console.log(`for ${basicpay2} your gross salary wil be ${grosspay2}`);

// case 3:

const basicpay3 = 29800;

const grosspay3 = grossSal(basicpay3);

console.log(`for ${basicpay3} your gross salary wil be ${grosspay3}`);