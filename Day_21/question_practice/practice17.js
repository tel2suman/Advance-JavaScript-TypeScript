// Demonstrate first-class functions by storing multiple functions in an array and calling them one by one.

const helloFirst =()=> {

    console.log("Its first class function");
}

const helloSecond =()=>{

    console.log("Its second class function");
}

let twoFunction = [helloFirst, helloSecond];

helloFirst();

helloSecond();