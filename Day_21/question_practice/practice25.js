
// Write a program to demonstrate how var, let, and const behave differently when declared inside a loop.

for (let i = 0; i <= 10; i++) {

    let element = i * 2;

    console.log(element);
}

for (var index = 0; index < 10; index++) {

    var match = index * 2;
}

console.log(match);

for (const index = 0; index < 10; index++) {

    const element = index * 3;

    console.log(element);

}