// call signature
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(3, 4));

// using call signature
type multiply = (a: number, b: number) => number;

const multiply2: multiply = (a, b) => a * b;
console.log(multiply2(5, 6));

export {};
