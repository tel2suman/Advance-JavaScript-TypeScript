
var auto = 10; // outer variable

{
    var auto = 16;

    console.log(auto); // inner variable
}

console.log(auto);




let number = 52; // outer variable

const numerc = () => {

    let number = 35; // inner variable

    console.log(number);
}

numerc();

console.log(number);