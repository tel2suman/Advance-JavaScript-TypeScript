
const obj1 = {a: {v:0}, b: {c:0}};

const obj2 = Object.assign({}, obj1);

console.log(obj2,"ob2");

obj2.b.c = 3;

console.log(obj1,"2nd");

console.log(obj2,"obj3");