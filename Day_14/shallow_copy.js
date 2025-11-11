
//Shallow copy copies only the outer structure, not the nested objects.

const obj1 = {a:1, b:{x:10}};

const obj2 = {...obj1};

obj2.b.x = 50;

console.log(obj1.b.x);