
// for (var i=0; i<5; i++) {

//     setTimeout(()=>{

//         console.log(`var loop after timeout`,i)

//     }, 1000)
// }

// console.log(`immediately after loop`, i) // here 'i' is accessible and holds its final value (5)


// for (let j = 0; j < 5; i++) {

//     setTimeout(()=>{

//         console.log(`let loop after timeout`, j)

//     })
// }

// console.log (`immediately after loop `, j) // This would cause a ReferenceError: j is not defined


for (let k = 0; k < 5; k++) {
    
  const constantvalue = k * 5;

  console.log(`const loop (inside loop):`, constantvalue); // This would cause a ReferenceError: constantvalue is not defined
}

console.log (`immediately after loop `, constantvalue) // This would cause a ReferenceError: constantvalue is not defined