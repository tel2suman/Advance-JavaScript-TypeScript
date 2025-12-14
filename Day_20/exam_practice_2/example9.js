
let a = 5;

// let b = hello(a)

const hello =(a)=>{

    if (a === 1) {

        return 1;
    }

    return  a*hello(a-1);
}

let b = hello(a);

console.log(b);