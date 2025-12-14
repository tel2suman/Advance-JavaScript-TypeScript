const o = {
    name: "Suman",
    age: 30,
};

const a = {};

for (let k in o) {

    let v = o[k];

    a[v] = k;
}

console.log(a)