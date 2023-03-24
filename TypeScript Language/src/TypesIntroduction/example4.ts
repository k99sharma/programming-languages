// enum type
enum Color {
  "Red",
  "Green",
  "Blue",
}

console.log(Color.Red);
console.log(Color.Blue);
console.log(Color[0]);
console.log(Color[2]);

console.log(Color[6]); // Wrong value but no error

// const enums
const enum Language {
  "English",
  "Spanish",
  "German",
}

console.log(Language.German);
// console.log(Language.Hindi);    // Error
