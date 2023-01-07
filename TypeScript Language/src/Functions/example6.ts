// generic types
type sum = (a: number, b: number) => number;
const sum: sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 4));

// using generics to print parameter
type display = {
  <T>(arg: T): void;
};

const display: display = (arg) => {
  console.log(arg);
};

display("Hi");
display(22);
display(2.424);
display(true);
