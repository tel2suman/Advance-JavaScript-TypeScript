 let pairs = [
   {
     name: "suman",
     age: 30,
     contact: 9836541605,
     address: "Baguiati",
     skills: ["python", "javascript"],
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

   {
     name: "Ram",
     age: 56,
     contact: 7523169523,
     address: "Kathmundu",
     skills: [".NET", "JAVA", "SpringBoot"],
    },
];

const keyPair=()=>{

    for (let i in pairs) {

        console.log(`the values are`, pairs[i], `the indexes are`, [i]);
    }
}

keyPair();

