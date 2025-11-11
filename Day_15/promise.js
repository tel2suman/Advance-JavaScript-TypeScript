
// let a = new Promise((resolve, reject) => {
//   resolve("Suman");
// });

// a.then((item) => console.log(item)).catch(() => console.log(false));

// console.log(a);



let a = true;

function hello() {
    return  new Promise ((resolve, reject)=>{
        if (a) {

            resolve("Hello Boys");

        } else {

            reject("Bye");
        }
    })
}

let c = hello();

c.then((item)=>console.log(item)).catch((error)=>console.log(error));



