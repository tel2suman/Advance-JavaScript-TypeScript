
// defining an array

let cars = [];

console.log(cars);

// creating an array with list elements

let bikes = ["Honda", "Hero", "Yamaha", "Royal Enfield", "Kawasaki", "Jawa", "BMW" ];

console.log(bikes);

// Create using new Keyword (Constructor)

//let num = new Array [10, 20, 30, 40, 50] // throws an error

let num = new Array (10, 20, 30, 40,50)

console.log(num);

// Array of Objects

let person = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 46,
        skills: ["python", "javascript"],
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 46,
        skills: ["python", "javascript"],
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 46,
        skills: ["python", "javascript"],
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 56,
        skills: ["ruby", "powerBI"],
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 62,
        skills: ["python", "javascript"],
    },
];

let [,,,p] = person

console.log(p)