
let num = 56;

let outfact = 1;

const numFact =()=>{

    for (let i = 1; i <= num; i++) {

        outfact = (outfact*i);
    }

    console.log(outfact.toExponential(2));
}

numFact();