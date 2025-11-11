let a = true;

const hello=(message, delay)=>{

    return new Promise ((resolve)=>{
        setTimeout(()=>{
            if (a){
                console.log(message);
                resolve();
            }
        }, delay);
        console.log("after SetTimeout");
    })

}

let b = hello("Task 1",1000);

b.then(()=>hello("Task 2",1000)).then(()=>hello("Task 3", 2000));