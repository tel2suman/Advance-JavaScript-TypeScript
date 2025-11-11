// Write a js program to find the eligibility of admission for a professional course
// based on the following criteria:
// Either, marks in maths>= 65 , marks in physics>=55 and marks in chemistry>=50
// or, total in maths and physics >=140 and total in three subject>=190


let physics = 50;

let chemistry = 50;

let maths = 50;

if (maths >= 65) {

  console.log("Eligable");

} else if (physics >= 55 && chemistry >= 50) {

  console.log("Eligable");

} else if (physics + maths >= 140 && physics + chemistry + maths >= 190) {

  console.log("Eligable");

} else {

  console.log("Non Eligable");
}

