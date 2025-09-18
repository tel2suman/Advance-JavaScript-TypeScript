
//function scope

function myCarname() {

    let car = "volvo";

    console.log(car);
}

myCarname();

// block scope

{
   let abacus = 12;
   console.log(abacus);
}


let a = 12;

function hello() {

   {
     console.log(a);
    }
    console.log(a);
}