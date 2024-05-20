// Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return 1 / callRecFunction(x, Math.abs(n));
  else return callRecFunction(x, Math.abs(n));
}

function callRecFunction(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    return callRecFunction(x, n / 2) ** 2;
  } else {
  }
  return callRecFunction(x, (n - 1) / 2) ** 2 * x;
}

/**
 * Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

 */

// =======================================================================================================================================================

// Subsets/powersets of string
function subsequent(str) {
  return helper(str, "", 0);
}

function helper(str, substr, index) {
  if (index === str.length) {
    console.log(substr);
    return;
  }
  helper(str, substr + str[index], index + 1);
  helper(str, substr, index + 1);
  return;
}

subsequent("abc");

/**
 * a
 * b
 * c
 * ab
 * ac
 * bc
 * ac
 * abc
 * ""

powersets not include empty string/array but subsets does
 */

// ===============================================================================================================
// Subset of Array

function subArray(arr) {
  return helper2(arr, [], 0);
}

function helper2(arr, substr, index) {
  if (index === arr.length) {
    console.log(substr);
    return;
  }
  substr.push(arr[index]);
  // console.log("pushed",substr)
  helper2(arr, substr, index + 1);
  substr.pop();
  // console.log("popped",substr)

  helper2(arr, substr, index + 1);
  return;
}

subArray([1, 2, 3]);

/**
 * [ 1, 2, 3 ]
[ 1, 2 ]
[ 1, 3 ]
[ 1 ]
[ 2, 3 ]
[ 2 ]
[ 3 ]
[]

 */

// =================================================================================================================================

// Sum of Array subset
function helper3(arr, sum, tempSum, i) {
  if (sum === tempSum) return true;
  if (i >= arr.length) return false;
  return (
    helper3(arr, sum, tempSum + arr[i], i + 1) ||
    helper3(arr, sum, tempSum, i + 1)
  );
}

function isSubSetSum(arr, sum) {
  return helper3(arr, sum, 0, 0);
}

console.log(isSubSetSum([3, 34, 4, 6, 16, 1], 9));

// true

// =================================================================================================================================

// All possible permutations
const res: any = [];

function helper4(arr, index) {
  if (index >= arr.length) {
    res.push([...arr]);
    return;
  }
  for (let j = index; j < arr.length; j++) {
    [arr[index], arr[j]] = [arr[j], arr[index]];
    helper4(arr, index + 1);
    // backtracking
    [arr[index], arr[j]] = [arr[j], arr[index]];
  }
}

function possibleRecusrsions(arr) {
  helper4(arr, 0);
  return res;
}

console.log(possibleRecusrsions([1, 2, 3, 4]));

// output: [
//   [1, 2, 3, 4],
//   [1, 2, 4, 3],
//   [1, 3, 2, 4],
//   [1, 3, 4, 2],
//   [1, 4, 3, 2],
//   [1, 4, 2, 3],
//   [2, 1, 3, 4],
//   [2, 1, 4, 3],
//   [2, 3, 1, 4],
//   [2, 3, 4, 1],
//   [2, 4, 3, 1],
//   [2, 4, 1, 3],
//   [3, 2, 1, 4],
//   [3, 2, 4, 1],
//   [3, 1, 2, 4],
//   [3, 1, 4, 2],
//   [3, 4, 1, 2],
//   [3, 4, 2, 1],
//   [4, 2, 3, 1],
//   [4, 2, 1, 3],
//   [4, 3, 2, 1],
//   [4, 3, 1, 2],
//   [4, 1, 3, 2],
//   [4, 1, 2, 3],
// ];

// =================================================================================================================================

// Possible Words with phone digits keypad
const keys = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
const result: string[] = [];
function helper5(arr, n, temp: string, i) {
  if (i === n) {
    result.push(temp);
    return;
  }
  for (let j = 0; j < keys[arr[i]].length; j++) {
    helper5(arr, n, temp + keys[arr[i]][j], i + 1);
  }
  return;
}

function possibleWords(arr, n) {
  helper5(arr, n, "", 0);
  return result;
}
console.log(possibleWords([2, 7], 2));

// ["ap", "aq", "ar", "as", "bp", "bq", "br", "bs", "cp", "cq", "cr", "cs"];

// =================================================================================================================================

//
