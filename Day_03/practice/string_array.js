
let fruits = ["apple", "bannana", "orange", "mango"]


function myFruits () {

    for (let i in fruits) {

       fruits.unshift("Guava" , "pineapple")
    }

    console.log(fruits);
}

myFruits();


function myApple() {

    let f = ["apple", "bannana", "orange", "mango"];

    for (let i in f) {

        f.shift();
    }

  console.log(f);
}

myApple();
