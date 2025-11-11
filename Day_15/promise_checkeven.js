
let num = [4, 6, 8, 12, 13, 14, 15, 2];

const checkFunc =(val)=>{

    return new Promise((resolve, reject) => {

        for (let i of val) {

            if (i % 2 === 0) {

                resolve("number entered succesfully");

                console.log("The even numberes are", i);

            } else {

                reject("The number canonot entered because of odd number");

                console.log("the odd numbers are", i);

            }
        }
    });
}


let numcheck = checkFunc(num);

numcheck.then((message)=>console.log(message)).catch((error)=>console.log(error));


