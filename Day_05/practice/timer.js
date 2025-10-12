

let bikes = [
  "Honda",
  "Hero",
  "Honda",
  "Kawasaki",
  "Yamaha",
  "Royal Enfield",
  "Kawasaki",
  "BMW",
  "Jawa",
  "BMW",
  "TVS"
];

const newbikes = bikes.reduce((show, newly)=> {

    //  show[newly] = newly.length;

    if (!show.includes(newly)) {

        show.push(newly)
    }

    return show;

},[])

console.log(newbikes);


// let list = [1, 2, 3, 4, 5, 6]

// const myTimer = (val)=>{

//     for (i of val) {

//         setTimeout (()=>{
//             console.log(i)

//         }, 1000)
//     }
// }

// myTimer(list);
