//outPut: -["Hello-nill", "Hello-raj", "Hello-rupam"];

let a = {
  nill: "Hy",
  raj: "by",
  rupam: "oo",
}


const hello = (item) => {
  return Object.keys(item).map((item) => `Hello - ${item}`);
};

console.log(hello(a));
