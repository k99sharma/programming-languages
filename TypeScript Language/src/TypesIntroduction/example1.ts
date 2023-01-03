// ----------- type number ------------
let a: number;
a = 1;

console.log(a);

const newA: number = 1;
console.log(newA);

// ---------- type literal -----------
let num: "1" = "1";
console.log(num);
// num = '2';       '2' is not assignable to type '1'

// ----------- type object --------------
let obj1: object = {
  b: 21,
};

// console.log(obj1.b); Error: b is not present on obj1

let obj2 = {
  b: 21,
};

console.log(obj2.b);

const obj3 = {
  b: 321,
};
console.log(obj3.b);

const obj4: {
  a: number;
} = {
  a: 12,
};
console.log(obj4.a);

const obj5: {
  a: number; // required
  b?: string; // optional
  [key: string]: any;
} = {
  a: 43,
  //   b: "hi",
  "32b": "this is 32 b",
  name: "Jon Doe",
  age: 12,
};

console.log(obj5);

const obj6: {
  readonly a: number;
} = {
  a: 2,
};
console.log(obj6);
// obj6.a = 12;    a is readonly now, cannot assign new value to it

const obj7 = {};
// obj7.a = 10;    avoid this type

// -------- Index Signature ----------
let fruits: {
  [key: string]: string;
} = {
  mango: "sweet",
  strawberry: "very sweet",
};
console.log(fruits);
console.log(fruits.mango);

export {};
