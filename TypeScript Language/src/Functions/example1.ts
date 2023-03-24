// function
// parameter type -> number
// return type -> number
function add1(a: number, b: number): number {
  return a + b;
}

// function with optional parameter
function log(message: string, userId?: string) {
  if (typeof userId === "string") {
    console.log(`Message is ${message}: ${userId}`);
  } else {
    console.log(`Message is ${message}`);
  }
}

log("Hi! This is my first message");
log("Hi! This is my second message", "k99sharma");

export {};
