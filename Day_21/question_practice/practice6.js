
let pairs = [
  {
    name: "suman",
    age: 30,
    address: "airport",
    skills: ["Html", "javascript"],
  },
  {
    name: "Niladri",
    age: 35,
    contact: 9831629925,
    address: "Kestopur",
    skills: ["ReactJs", "NextJs"],
  },
  {
    name: "Surya",
    age: 40,
    contact: 9836694502,
    address: "Bilaspur",
    skills: ["NodeJs", "PHP"],
  },
];

const keyPair =()=>{

    for (let i in pairs) {

        console.log(`the values are`, pairs[i], `the indexes are`, [i]);
    }
}

keyPair();