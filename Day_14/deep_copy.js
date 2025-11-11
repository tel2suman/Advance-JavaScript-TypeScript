
//Deep copy creates a completely independent clone — including nested objects.

const obj1 = {a:1, b:{x:10}};

const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.x = 50;

console.log(obj1.b.x);