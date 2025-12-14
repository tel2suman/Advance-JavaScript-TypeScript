
// Create a program that shows the difference between function scope of var and block scope of let.


function Demonstrate(num1, num2) {

    var total = num1 + num2;

    console.log(total);
}

Demonstrate(20, 12);


{
  let ab = 12;
  console.log(ab);
}