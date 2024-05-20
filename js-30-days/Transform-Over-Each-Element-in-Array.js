/**Transform Over Each Element in Array
 * Given an integer array arr and a mapping function fn, return a new
 * array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map((a, i) => {
    return fn(a, i);
  });
};

// CASE 1
// function plusone(n) { return n + 1; }
// [1,2,3]
// Output
// [2,3,4]
// Expected
// [2,3,4]

//CASE 2
// function plusI(n, i) { return n + i; }
// [1,2,3]
// Output
// [1,3,5]
// Expected
// [1,3,5]
//

// CASE 3
// Input
// function constant(n, i) { return 42; }
// [10,20,30]
// Output
// [42,42,42]
// Expected
// [42,42,42]
//
