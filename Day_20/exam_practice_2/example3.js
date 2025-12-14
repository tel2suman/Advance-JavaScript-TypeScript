//shallow copy

let a = {
    a:1, b:2,c:{ b:1}
}

let b = {...a};

a.c.b = 12;


console.log(a);

console.log(b);