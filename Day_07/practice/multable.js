

let num = 2;

let i = 1;

const multiTable=()=> {
    while (i <= 10) {
        let table = (num * i)
        console.log(`${num} * ${i} = ${table}`);
        i++;
    }
}

multiTable();

