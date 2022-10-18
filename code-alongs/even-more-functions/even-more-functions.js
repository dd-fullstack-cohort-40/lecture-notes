// A function does 1 thing well.
// Functions are reusable code.
// Functions can be run over and over whenever needed.
// Functions can receive values via arguments(aka parameters).
// Functions can return a value.
// Named functions don't run when they are declared.
// Functions are run when they are called by name and followed by () or (arguments).
// A variable can contain a function.
// The name of a function is a variable.

function ager (receivedAge) {
  return receivedAge + 1
}

let bobAge = 32
console.log("Bob's age before running ager is " + bobAge)
bobAge = ager(bobAge)
console.log("Bob's age after running ager is " + bobAge)
