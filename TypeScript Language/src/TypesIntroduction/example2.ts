// array in typescript
const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = []; // type is any[]
arr2.push("Hello");
arr2.push(2);
console.log(arr2); // type is (string | number) []

const arr3: number[] = [1, 2, 3];
console.log(arr3);
// arr3.push('Hi');    // Error: string cannot be assigned to number

const arr4: (string | boolean)[] = [];
arr4.push("Hello");
arr4.push("Hi");
arr4.push(true);
arr4.push(false);
console.log(arr4);

// return type is void
function printOnlyString(arr4: (string | boolean)[]) {
  for (let el of arr4) {
    if (typeof el === "string") console.log(el);
  }
}

printOnlyString(arr4);

export {};
