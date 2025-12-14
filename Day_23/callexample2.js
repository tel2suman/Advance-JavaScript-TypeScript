
const car = {
    brand: "Audi",
    model: "Q6",
    color: "black",

    showBrand: function age(age) {

        console.log(`${this.brand}  age is ${age}`)

    },
};

car.showBrand.call(car, 21);