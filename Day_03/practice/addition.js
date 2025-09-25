

//addtion function

function add () {

    let values = [40, 50, 20, 72, 68, 37, 50, 110 ]

    let sum = [];

    for (let i in values) {

        sum = values[i]+sum*2;

    }

    console.log(sum)
}

add();

//division function

function division() {

  let values = [40, 50, 20, 72, 68, 37, 50, 110]

  let div = [];

    for (let i = 0; i < values.length; i++) {

        div = values[i] + div % 2;
    }

  console.log(div);
}

division();


// for of loop

function pushing () {

    let num = [40, 100, 1, 5, 25, 20]

    let sub = []

    for (let i of num) {

        sub.push(num[i]*2);
    }

    console.log(sub);
}

pushing();