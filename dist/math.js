// Reverse Integer
function reverse(x) {
    let revNum = "";
    const isNeg = x < 0;
    if (x === 0) {
        return 0;
    }
    let num = Math.abs(x);
    while (num > 0) {
        if (num > 0 && num < 10) {
            revNum += num;
            x = +revNum;
            if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1)
                return 0;
            return isNeg ? -x : x;
        }
        revNum += num % 10;
        num = Math.floor(num / 10);
    }
}
/**Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 */
// ======================================================================================================================================
// Palindrome Number
function isPalindrome1(x) {
    const values = x.toString().split("");
    let result = true;
    for (let i = 0; i < values.length; i++) {
        if (values[i] != values[values.length - 1 - i]) {
            result = false;
        }
    }
    return result;
}
/**Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */
// =================================================================================================================
// Happy Number: Squares of digit = 1
// Approach 1
function happy(n) {
    if (n === 1)
        return true;
    let num = n;
    let cache = [];
    while (num != 1) {
        let output = 0;
        while (num > 0) {
            if (num > 0 && num < 10) {
                output = output + Math.pow(num, 2);
                break;
            }
            output = output + Math.pow(num % 10, 2);
            num = Math.floor(num / 10);
        }
        if (output === 1) {
            return true;
        }
        num = output;
        cache.push(num);
        if (num in cache)
            return false;
    }
    return false;
}
// Approach 2
function isHappy(n) {
    let sum = n * n;
    let str = n.toString();
    let limit = 0;
    while (Number(str) > 3 && limit < 15) {
        sum = 0;
        for (let c of str) {
            sum += Math.pow(Number(c), 2);
        }
        str = sum.toString();
        limit++;
    }
    return sum === 1;
}
/**
 * Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false

 */
// =================================================================================================================
// Minimum Moves to Equal Array Elements
function minMoves(nums) {
    let minValue = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (minValue > nums[i]) {
            minValue = nums[i];
        }
    }
    let minMoves = 0;
    for (let i = 0; i < nums.length; i++) {
        minMoves = minMoves + (nums[i] - minValue);
    }
    return minMoves;
}
/**Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments two elements):
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
Example 2:

Input: nums = [1,1,1]
Output: 0
 */
// =================================================================================================================
// Excel Sheet column title
//# sourceMappingURL=math.js.map