let even = 0;

let odd = 0;

const evenNum = () => {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      even = i;
      console.log(`the even numbers are`, i);
    } else {
      odd = i;
      console.log(`the odd numbers are`, i);
    }
  }
};

evenNum();
