
let duparr = [10, 20, 30, 50, 40, 30, 60, 50, 90, 30];

let newarr = duparr.filter((num, index) => {

    if (duparr.indexOf(num) == index) {

        return true;

    } else {

        return false;
    }
});

console.log(newarr);
