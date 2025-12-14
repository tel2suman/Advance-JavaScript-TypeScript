
// Reverse a String

let a = 5;

const reverseHello=(item)=> {

    if (item === "") {

    return "";
}

  return reverseHello(item.slice(1)) + item[0];

}

let b = reverseHello("hello");

console.log(b);
