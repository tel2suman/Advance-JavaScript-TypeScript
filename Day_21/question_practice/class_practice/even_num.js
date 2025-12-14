let arr = [10, 15, 25, 40, 55, 60];

let even = 0;

let odd = 0;


const evenNum = (val)=> {

    for (let i of val) {

        if (i % 2 === 0) {

            even = i;

            console.log("The even numbers are", i)

        } else {

            odd = i;

            console.log("The odd numbers are",i)
        }
    }

}

evenNum(arr);