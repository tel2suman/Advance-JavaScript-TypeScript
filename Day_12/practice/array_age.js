
// Increase the age of all users in an array of objects.  Input:  [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 },{ name: "Charlie", age: 22 }];
// Expected Output:  { name: "Alice", age: 26 },  { name: "Bob", age: 31 },  { name: "Charlie", age: 23 }

let input = [

    {
        name: "Alice",
        age: 25,
    },

    {
        name: "Bob",
        age: 30,
    },

    {
        name: "Charlie",
        age: 22,
    }
];

let updatedval = input.map((inval=>{

    if (inval.name ==="Alice") {
        inval.age = 26;
    }
    if (inval.name === "Bob") {
        inval.age = 31;
    }
    if (inval.name === "Charlie") {
        inval.age = 23;
    }
    return input;
}))

console.log(updatedval);