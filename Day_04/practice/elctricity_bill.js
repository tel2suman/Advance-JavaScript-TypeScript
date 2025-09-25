
let unit = 150

let bill = 0


if (unit <= 100) {

    bill = unit * 5;

}else if (unit <=300 && unit >= 100 ) {

    bill = unit * 7;

}else if  (unit >= 300 ) {

    bill = unit * 10;
}

console.log (`Total Units Consumed: ${unit}`);
console.log(`Your Electricity Bill is: ₹${bill}`);
