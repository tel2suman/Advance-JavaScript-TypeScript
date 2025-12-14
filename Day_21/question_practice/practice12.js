
// Create a higher-order function that takes another function as input and executes it 3 times.

let a = true;

const executeHello=(message, delay)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            if (a)  {
                resolve();
                console.log(message);
            }
        },delay)
    })
}

let b = executeHello("task 1 executed", 1000);

b.then(()=>executeHello("task 2 executed", 1500)).then(()=>executeHello("task 3 executed", 2000));