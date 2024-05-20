// Two sum (target match in array)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const diff = {};
  for (let i = 0; i < nums.length; i++) {
    if (diff[target - nums[i]] !== undefined) {
      return [i, diff[target - nums[i]]];
    }
    diff[nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
/**
 * Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

// ----------------------------------------------------------------------------------------------------------

// Best Time to Buy and Sell Stock

//APP1
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update minPrice if we find a new minimum price
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice; // Update maxProfit if we find a new maximum profit
    }
  }
  return maxProfit;
};

//APP2
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }
  return profit;
};

/**Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

// ---------------------------------------------------------------------------------------------------------------------

// Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  console.log(nums1);
  nums1.sort((a, b) => a - b);
};

/**Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 */

// ---------------------------------------------------------------------------------------------------------------------

// Move Zeroes to end of array
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/**Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
  */

// ---------------------------------------------------------------------------------------------------------------------

// Best Time to Buy and Sell Stock Part 2
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
/**
 * Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

 */

// ---------------------------------------------------------------------------------------------------------------------

// Running Sum of 1d Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = sum + nums[i];
    sum = nums[i];
  }
  return nums;
};
/**
 * Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

 */

// ---------------------------------------------------------------------------------------------------------------------

// Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let totalSum = nums.reduce((acc, cv) => acc + cv);
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
/**
 * Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

// ---------------------------------------------------------------------------------------------------------------------

// Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let elementsCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in elementsCount) {
      elementsCount[nums[i]]++;
    } else {
      elementsCount[nums[i]] = 1;
    }
  }
  console.log(elementsCount);
  let majCount = 0,
    majElement;
  for (const key in elementsCount) {
    if (elementsCount[key] > majCount) {
      majCount = elementsCount[key];
      majElement = key;
    }
  }
  return majElement;
};

/**
 * Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 */

// ---------------------------------------------------------------------------------------------------------------------

// sum of last two Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let fibArr = [];
  let a = 0,
    b = 1;
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  for (i = 0; i < n; i++) {
    if (i === 0) {
      fibArr.push(a);
    } else if (i === 1) {
      fibArr.push(b);
    } else {
      let c = a + b;
      a = b;
      b = c;
      fibArr.push(c);
    }
  }
  return fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
};
/**F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
  */

// ---------------------------------------------------------------------------------------------------------------------

// Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squaredArray = nums.map((num) => num * num);
  console.log(squaredArray);
  return squaredArray.sort((a, b) => a - b);
};

// Another approach with O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const totalNums = nums.length;
  let left = 0;
  let right = totalNums - 1;
  const result = new Array(totalNums);

  for (let i = right; i >= 0; i--) {
    const leftValue = nums[left];
    const rightValue = nums[right];

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      result[i] = leftValue ** 2;
      left++;

      continue;
    }

    result[i] = rightValue ** 2;
    right--;
  }

  return result;
};

/**Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 */

// ---------------------------------------------------------------------------------------------------------------------

// Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  let a = [1],
    b = [1, 1];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push(a);
    } else if (i === 1) {
      result.push(b);
    } else {
      let eachArr = [];
      let prevRow = result[i - 1];
      eachArr.push(1);
      for (let j = 0; j < prevRow.length - 1; j++) {
        eachArr.push(prevRow[j] + prevRow[j + 1]);
      }
      eachArr.push(1);
      result.push(eachArr);
    }
  }
  return result;
};

/**In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

// ---------------------------------------------------------------------------------------------------------------------

// Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
/**
 * Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

// ---------------------------------------------------------------------------------------------------------------------

//
