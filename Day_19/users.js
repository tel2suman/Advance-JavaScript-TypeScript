const users = [
  { name: "A", messages: ["Hi", "Hello"] },
  { name: "B", messages: ["Ok", "Bye"] },
];

// let u = users.map((element)=>{
//     console.log(element.messages);
// });

let user = [...users];

console.log(user);

// for (let i of users) {
//     for (let j of i.messages) {
//         console.log(j);
//     }
// }

// for (let i in users) {
//     for (let j in users[i].messages) {
//         console.log(users[i].messages[j])
//     }
// }


// for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < users.length; j++) {
//         console.log(users[i].messages[j])
//     }
// }

// let u = users.map((element)=>{
//     element.messages.map((j)=>{
//         console.log(j);
//     })
// });