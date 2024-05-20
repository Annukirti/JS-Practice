// Function Composition
/**Given an array of functions [f1, f2, f3, ..., fn], return a new function fn 
 *that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 */

// WAY 1: MUCH SPEED UP APPROACH
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (!functions.length) {
      return x;
    }
    for (let index = functions.length - 1; index >= 0; index--) {
      x = functions[index](x);
    }
    return x;
  };
};

//WAY 2
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (!functions.length) {
      return x;
    }
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

// CASE 1
// Input
// [x => x + 1, x => x * x, x => 2 * x]
// 4
// Output
// 65
// Expected
// 65

// CASE 2
// Input
// [x => 10 * x, x => 10 * x, x => 10 * x]
// 1
// Output
// 1000
// Expected
// 1000

// CASE 3
// Input
// []
// 42
// Output
// 42
// Expected
// 42
