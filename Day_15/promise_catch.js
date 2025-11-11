
function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    else {
        return a / b;
    }
}

try {
    let result = divide(10, 5);
    console.log(result);

} catch (error) {

    let message = "Catches the error and logs its message";

    console.log("An error occured", error.message);

}