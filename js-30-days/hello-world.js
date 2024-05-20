/**
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

 */

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// Test cases
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"

const f2 = createHelloWorld();
console.log(f2({}, null, 42)); // Output: "Hello World"

/** 
 * CASE 1
Input
[]
Stdout
Hello World
Hello World
Output
"Hello World"
Expected
"Hello World"

 * CASE 2
Input
[{},null,42]
Output
"Hello World"
Expected
"Hello World"
 */
