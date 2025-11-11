
var auto = 16; // outer variable

{
  var auto = 10;

  console.log(auto); // inner variable
}

console.log(auto);



let number = 52; // outer variable

const numeric =()=>{

  let number = 35; // inner variable

  console.log(number);
}

numeric();

console.log(number);
