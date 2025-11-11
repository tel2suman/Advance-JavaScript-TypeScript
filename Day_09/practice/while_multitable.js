
let mul = 9;

let table;

let i = 1;

const multiTable =()=>{

    while (i <= 9) {

        table = (mul * i);

        console.log(`${mul} * ${i} = ${table}`);

        i++;

    }
}

multiTable();