//Given array : [10,43,76,28,33],  Expected output: [‘even’, ‘odd’, ‘even’, ‘even’, ‘odd’]

let arr = [10, 43, 76, 28, 33];

let emarr = [];

// const evenOdd=(val)=>{

//     for (let i of val) {

//         if (i % 2 === 0) {

//             emarr.push(i);

//             console.log ("even");

//         } else if (i % 2 !== 0) {

//             emarr.push(i);

//             console.log("odd")
//         }
//     }
// }


// evenOdd(arr);

// console.log(emarr);

letNewarr = arr.map((arrval)=>{

    if (arrval % 2 ===0) {

        emarr.push(arrval);

        console.log("even")

    } else if (arrval % 2 !==0) {

        emarr.push(arrval);

        console.log("odd");
    }
})



console.log(emarr);