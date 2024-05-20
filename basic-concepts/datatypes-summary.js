//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId); // symbol
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof outsideTemp); // object

// typeof Operator Results
// Undefined	"undefined"
// Null	        "object"
// Boolean  	"boolean"
// Number   	"number"
// String   	"string"
// Object       (native and does not implement [[Call]])	"object"
// Object       (native or host and does implement [[Call]])	"function"
// Object       (host and does not implement [[Call]])	Implementation-defined except
//               may not be "undefined", "boolean", "number", or "string".

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
 * Dynamically-typed languages are those (like JavaScript) where the interpreter assigns
   variables a type at runtime based on the variable's value at the time.
 * TypeScript is primarily a statically typed language, not a dynamically typed one
 */
