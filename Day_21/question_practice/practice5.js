const createCounter = (item) => {
  item;

  return (Increment = () => {
    item++;

    console.log(item);
  });
};

const counter1 = createCounter(0);

const couter2 = createCounter(1);

counter1();

counter1();
