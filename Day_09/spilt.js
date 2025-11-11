let str = "Suman Bhattacharjee"

let b = str.split(' ');

console.log(b);

 let c = str.split(" ",2)

 let d = str[2].split();

 let s =str.split(" ")

console.log(s[1]);

let str2 = "2022-12-04"

let e = str2.split("-")

console.log(e);

 let str3 ="2022:22.4";

 let x = str3.split(/[:.]/); //using regular expression

 console.log(x);

 const pattern = /hello/;

 const str4 = "hello world";

 console.log(pattern.test(str4));
