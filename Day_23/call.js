
let a = {person : "nill"};

let b = {person: "rupam"};

function n(age, address) {

    console.log(`I am ${this.person} and age ${age} and city ${address}`);
}

// n.call(a, 23, "malda");

// n.call (b, 25, "kolkata");

// n.apply(a, [23, "Malda"]);

// n.apply(b, [36, "kolkata"]);

let m = n.bind(a, 23, "malda");

let n = n.bind(b, 25, "kolkata");

m();

n();