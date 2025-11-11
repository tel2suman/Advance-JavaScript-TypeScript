
// for (var i = 0; i < 5; i++) {

//     setTimeout(()=>{

//         console.log(`var loop after timeout`, i);

//     }, 1000)
// }

// console.log(`immediately after loop`, i);

// for (let j = 0; j < 10; j++) {

//     setTimeout(()=>{

//         console.log(`let loop after timeout`, j);

//     })
// }

// console.log(`immediately after loop`, j); // This would cause a ReferenceError: j is not defined

for (let k = 0; k < 10; k++) {

    const constvalue = k * 5;

    console.log(`const inside loop`, constvalue) // constvalue is not defined

}

console.log(`immediately after loop`, constvalue); //this would cause a reference error
