// rest parameter in functions
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3, 4, 5]));

// rest example
function sum2(...numbers: number[]) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
const num1 = [2, 3, 5, 6, 6];
// console.log(sum2(num1));    // Error: type is number[]
console.log(sum2(...num1));

export {};
