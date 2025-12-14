// nested loop

let a = [["nill"],["rupam"],["raj"]];

let b = [];

for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a[i].length; j++) {

        b.push(a[i][j]);
    }
}

console.log(b);