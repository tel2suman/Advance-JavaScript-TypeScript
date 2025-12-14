
// nested loop example 2

let a = [
  { name: "nill", address: ["malda", "jalpaiguri"] },
  { name: "abhirup", address: ["madhyamgram", "barasat"] },
  { name: "harsh", address: ["purulia", "barasat"] },
  { name: "suman", address: ["airport", "digha"] },
];

let b = [];

const nestedObj=()=> {

    for (let i = 0; i < a.length; i++) {

       for (let j = 0; j < a[i].address.length; j++) {
            b.push(a[i].address[j]);
        }
    }

    console.log(b);
}


nestedObj();