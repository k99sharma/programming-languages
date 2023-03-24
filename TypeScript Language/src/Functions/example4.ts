// generator functions
function* generateFibonacci() {
  let a = 0;
  let b = 1;

  while (1) {
    yield console.log(a + b);
    a = b;
    b = a + b;
  }
}

// creating a generator
const generator = generateFibonacci();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

export {};
