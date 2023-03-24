// this keyword

// function consoleThis(){
//     console.log(this);   // Error: this has type any
// }

// using method
type example = {
  add: (a: number, b: number) => number;
};

const ex1: example = {
  add(a, b) {
    console.log(this);
    return a + b;
  },
};

console.log(ex1.add(2, 4));
console.log(typeof ex1.add(2, 4));

export {};
