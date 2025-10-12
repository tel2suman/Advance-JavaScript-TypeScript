

myCarname = ()=> {

    var car = "skoda";

    console.log(car); // its access results skoda

    var car = "volvo";

    console.log(car); // its  access results volvo
}

myCarname();

{
  let abacus = 13; //Cannot redeclare block-scoped variable 'abacus'.

  console.log(abacus); // Cannot access 'abacus' before initialization

  let abacus = 12;

  console.log(abacus); //SyntaxError: Identifier 'abacus' has already been declared
}
