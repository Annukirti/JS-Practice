/**Given an integer n, return a counter function. This counter function initially returns n and 
 * then returns 1 more than the previous value every 
 * subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

 */

function createCounter(n) {
  return function () {
    return n++;
  };
}

// Test case
function testCounter(n, calls) {
  const counter = createCounter(n);
  const results = [];
  for (let i = 0; i < calls.length; i++) {
    results.push(counter());
  }
  return results;
}

console.log(testCounter(10, ["call", "call", "call"])); // Output: [10, 11, 12]
console.log(testCounter(-2, ["call", "call", "call", "call", "call"])); // Output: [-2, -1, 0, 1, 2]
