
let a = true;

const promChain = (message, delay)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            if (a) {
                console.log(message);
                resolve();
            }
        }, delay);

        console.log("after settimeout");
    })
}

let b = promChain("Task 1", 1000);

b.then(()=>promChain("Task 2", 1500)).then(()=>promChain("Task 3", 2000));