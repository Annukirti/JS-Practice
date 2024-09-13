// Reverse Integer
function reverse(x) {
    var revNum = "";
    var isNeg = x < 0;
    if (x === 0) {
        return 0;
    }
    var num = Math.abs(x);
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
    var values = x.toString().split("");
    var result = true;
    for (var i = 0; i < values.length; i++) {
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
    var num = n;
    var cache = [];
    while (num != 1) {
        var output = 0;
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
    var sum = n * n;
    var str = n.toString();
    var limit = 0;
    while (Number(str) > 3 && limit < 15) {
        sum = 0;
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var c = str_1[_i];
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
    var minValue = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (minValue > nums[i]) {
            minValue = nums[i];
        }
    }
    var minMoves = 0;
    for (var i = 0; i < nums.length; i++) {
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
// 2220. Minimum Bit Flips to Convert Number
/**
 * Example 1:

Input: start = 10, goal = 7
Output: 3
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
Example 2:

Input: start = 3, goal = 4
Output: 3
Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
- Flip the first bit from the right: 011 -> 010.
- Flip the second bit from the right: 010 -> 000.
- Flip the third bit from the right: 000 -> 100.
It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.
 
 */
var minBitFlips = function (start, goal) {
    var startBits = decimalToBinary(start);
    var goalBits = decimalToBinary(goal);
    if (startBits.length !== goalBits.length) {
        var trailingZeroes = startBits.length > goalBits.length
            ? startBits.length - goalBits.length
            : goalBits.length - startBits.length;
        while (trailingZeroes !== 0) {
            if (startBits.length > goalBits.length) {
                goalBits.unshift(0);
            }
            else {
                startBits.unshift(0);
            }
            trailingZeroes--;
        }
    }
    var count = 0;
    for (var i = startBits.length - 1; i >= 0; i--) {
        if (startBits[i] != goalBits[i]) {
            startBits[i] = !startBits[i];
            count++;
        }
    }
    return count;
};
function decimalToBinary(num) {
    var binary = [];
    while (num !== 0) {
        var rem = num % 2;
        num = Math.floor(num / 2);
        binary.push(rem);
    }
    return binary.reverse();
}
console.log(minBitFlips(3, 4));
console.log(minBitFlips(10, 7));
