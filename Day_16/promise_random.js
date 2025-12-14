// Create a Promise that randomly:

// resolves with "Success 🎉"

// rejects with "Error ❌"

// Use .then() and .catch() to handle both cases.

const mathRandom =()=>{

    let random_toss = (Math.random());

    return new Promise ((resolve, reject)=>{

        if (random_toss > 0.5) {

            resolve("Succes 🎉");

        } else {

            reject("Error ❌");
        }

    })
};

let mathcheck = mathRandom();

mathcheck.then((item)=>console.log(item)).catch((error)=>console.log(error));