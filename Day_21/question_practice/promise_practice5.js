

const multiply =()=>{

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            let product = a * b;

            resolve(product);

        }, 1500)
    })
}

let p = multiply(10, 5);

p.then((message)=>console.log(message)).catch((error)=>console.log(error));