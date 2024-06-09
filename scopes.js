// global, local/function, block

// Global scope
var a = 1;
var b;

function one() {
  // Local scope
  var b = 2;
  console.log(a, b);
}

one();

console.log(a, b);

// Block scope: ES6 => let, const

// if (true) {
//   // Block scope
//   var c = 3;
//   let d;

//   d = 4;

//   const e = 5;  // SyntaxError: Missing initializer in const declaration.
//   // e = 6;        // TypeError: Assignment to constant variable.
// }

// console.log(c);

// console.log(b); // ReferenceError: b is not defined
// console.log(d); // ReferenceError: c is not defined

// var vs const
// var vs let
// let vs const
// var vs [let, const]

// default is to use const for variables that do not need to be reassigned
