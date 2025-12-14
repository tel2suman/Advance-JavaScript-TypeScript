
// Write a program that copies an object using the spread operator (deep vs shallow copy case).

// shallow copy

let obj1 = { a: 1, b: { x: 10 }, c: 10 };

let obj2 = { ...obj1 };

obj2.b.x = 50;

console.log({...obj1});

console.log({...obj2});

// deep copy

let valobj2 = JSON.parse(JSON.stringify({...obj1}));

 obj2.b.x = 20;

console.log({...obj1});

console.log({...valobj2});

