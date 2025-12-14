
//Find the second largest element in an array.

let newarr = [22, 899, 25, 10, 5];

newarr.sort((a, b) => b - a);

let firstNumber = newarr[0];

let result = null;

for (let i = 1; i < newarr.length; i++) {

    if (newarr[i] < firstNumber) {
        
        result = newarr[i];
    }
}

console.log(result);
