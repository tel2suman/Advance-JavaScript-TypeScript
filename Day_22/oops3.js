
class Sum {
  constructor(num1) {
    this.a = num1;
  }
}

class Math extends Sum {
  constructor(num1, num2) {
    super(num1);
    this.num2 = num2;
  }

  speak() {
    console.log(`${this.a + this.num2}`);
  }
}

const sum = new Math(10, 5);
sum.speak();