
// array destrucring

let d = [1, 2, 3, 4, 5, 6, 7];

let [e, f, g, h, i] = d;

console.log(e);

// console.log(d[4]);

console.log(h);


// object destrucring

let a = {
    name: "suman",
    address: "kolkata",
    menu:{
        food: "Biriyani",
        color: "Yellow"
    }
}

 let {name, address, menu:{food , color}}= a

console.log(a.menu);