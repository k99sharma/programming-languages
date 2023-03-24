// null type
let a1: null;
// a = 1;   Error
// a = undefined;       Error
a1 = null;

let a2 = null;
a2 = 1;

// undefined type
let b1: undefined;
// b1 = 1;      Error

let b2 = undefined;
b2 = 1;
b2 = 2;

// never type
let b3: never;
// b3 = 1;      Error

// void is used in case of function
