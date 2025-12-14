
const allPromise = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
       console.log(message);
    }, delay);

  });
};

const secondPromise = (message, delay)=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
        console.log(message);
      }, delay);

    });
}

let b = allPromise("hello");

b.then(() => allPromise("Task 1", 1000)).then(() => secondPromise("Task 2", 2000));


// let second_promise = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         resolve("resoved after 2 secs")
//     },4000)
// });

// const promises = [first_promise, second_promise];

// Promise.all(promises).then((value) => console.log(value));