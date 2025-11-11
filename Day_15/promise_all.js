// let a = true;


// const helloPromise=()=> {

//     return new Promise((resolve, reject )=>{

//         if (a) {

//             resolve("hello guys");

//         } else {

//             reject("bye");
//         }
//     })
// }

// let b = new Promise((resolve, reject) => {
//   resolve("Gd Mrng");
// });

// let c = new Promise((resolve, reject) => {
//   reject("Bye");
// });


// Promise.all([a, b, c]).then((message)=>console.log(message)).catch((error)=>{console.log(error)});


let first_promise = new Promise((resolve, reject)=>{

  setTimeout(()=>{

    resolve("resolved after 1 second");

  }, 1000);

});

let second_promise = new Promise((resolve, reject)=>{

  setTimeout(()=>{

    resolve("resolved after 3 seconds");

  },2000);

});

let third_promise = new Promise((resolve, reject)=>{

  setTimeout(()=>{

    resolve("resolved after 3 seconds")

  },3000);

});

try {

  let result = Promise.all([first_promise, second_promise, third_promise]);

  result.then((data)=>console.log(data));

} catch (error) {

  console.log(error);
}
