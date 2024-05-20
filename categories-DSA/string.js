// Add Strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
};
/**Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 */

// =================================================================================================================================

// Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longestPrefix = "";
  if (strs.length === 1) {
    return strs[0];
  }
  const sortedInput = strs.sort();
  const firstWord = sortedInput[0];
  const lastWord = sortedInput[strs.length - 1];
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== lastWord[i]) {
      break;
    }
    longestPrefix += firstWord[i];
  }
  return longestPrefix;
};

/**Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

// =================================================================================================================================

// Valid Palindrome II
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return innerPalindrome(i + 1, j, s) || innerPalindrome(i, j - 1, s);
    }
    i++;
    j--;
  }
  return true;
};

var innerPalindrome = function (i, j, s) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

/**
 * Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

 */

// =================================================================================================================================

// Find the Index of the First Occurrence in a String
// Approach 1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// Approach 2
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let j = 0;
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      const subString = haystack.slice(i, i + needle.length);
      if (subString === needle) {
        return i;
      }
    }
  }
  return -1;
};

// Approach 3
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0;
      for (; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) break;
        if (j === needle.length - 1) return i;
      }
    }
  }
  return -1;
};
/**Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

// Roman to Integers
function romanToInt(s) {
  function value(r) {
    switch (r) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      case "IV":
        return 4;
      case "IX":
        return 9;
      case "XL":
        return 40;
      case "XC":
        return 90;
      case "CD":
        return 400;
      case "CM":
        return 900;
      default:
        return 0;
    }
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i, i + 2);
    const val = value(str);
    if (val === 0) {
      result += value(s[i]);
    } else {
      result += val;
      i++;
    }
  }
  return result;
}

/**
 * Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 */
