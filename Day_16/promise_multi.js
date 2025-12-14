// Make a function multiply(a, b) that: waits 1.5 seconds (using setTimeout), then resolves the product of a * b

const multiply =(a, b)=>{

    return new Promise ((resolve, reject)=>{

        setTimeout(()=>{

            let product = a * b;

            resolve(product);

        },1500)
    })

}

let p = multiply(10, 5);

p.then((message)=>console.log(message)).catch((error)=>console.log(error));