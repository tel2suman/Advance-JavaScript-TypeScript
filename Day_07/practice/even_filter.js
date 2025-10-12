
let num = [4, 5, 6, 8, 11, 15, 20, 22, 23];

let numarr = num.filter((val)=>{

    if (val % 2 == 0) {

        return true;

    } else {

        return false;
    }
});

console.log(numarr);