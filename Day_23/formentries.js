
let a ={
    name: "Suman",
    address: "Kolkata",
}

let b = Object.fromEntries(
    Object.entries(a).map(([item, value])=>{
        return [value, item];
    })
);

console.log(b);