

//addtion function

let list = [40, 50, 20, 72, 68, 37, 50, 110];

let addsum = 0

function add (numlist) {

    for (let i of numlist) {

        addsum = (addsum + i / 2) ;

        //sum.push(i);

    }
}

add(list);

console.log(addsum);

//division function

let numbers = [40, 50, 20, 72, 68, 37, 50, 110];

let div = [];

function division(num) {

    for (let i of num) {

        div = i + div % 2;
    }
}

division(numbers);

console.log(div);


// for of loop

let values = [48, 72, 10, 100, 105];

let arr = []

function pushing (val) {

    for (let i of val) {

        // console.log(item[i]);

        arr.push(i*2)

    }

}

pushing(values);

console.log(arr);