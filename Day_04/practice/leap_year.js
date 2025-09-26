
let year = 1100;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

        console.log(`the year ${year} is a leap year`);

}else {
        console.log (`the year ${year} is not a leap year`)
}
