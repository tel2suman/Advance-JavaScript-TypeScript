
let isSuccess = true;

//let ifFailed = false;


const helloPromise=()=>{

    return new Promise ((resolve, reject)=>{

        if (isSuccess) {

            resolve("Success")

        } else {

            reject ("failed");
        }
    })

}

let c = helloPromise()

c.then((item) => console.log(item)).catch(() => console.log(false));

console.log(c);