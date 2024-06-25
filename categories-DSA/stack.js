// ===================================================INTRODUCTION=========================================================

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, Can't pop";
    }

    this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty, Can't peek";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    let stackElements = "";
    for (let i = 0; i < this.size(); i++) {
      stackElements += this.stack[i] + " ";
    }
    return stackElements;
  }
}
const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log("stack pushed with 10,20,30 and 40", stack.stack);

// console.log("stack elements", stack.printStack());

// stack.pop();
// console.log("stack popped", stack.stack);

// console.log("stack peeked", stack.peek());

// stack.pop();
// stack.pop();
// stack.pop();
// console.log("stack empty check", stack.isEmpty(), stack.size());

// console.log("stack peeked", stack.peek());

// console.log("stack popped", stack.pop());

// ===================================================QUESTION 1=========================================================

// Reverse the words of a string

// input: "the sky is blue"
// output: "blue is sky the"

var reverseWords = function (s) {
  let result = "";
  let stack = s.split(" ");
  let n = stack.length;
  for (let i = 0; i < n; i++) {
    let current = stack.pop();
    if (current) result += current + " ";
  }
  return result.trim();
};
// console.log(reverseWords("the sky is blue")); // blue is sky the
// console.log(reverseWords(" hello world ")); // world hello
// console.log(reverseWords("a good  example")); // example good a

// ===================================================QUESTION 2=========================================================

// Valid Parenthesis

function validParenthesis(string) {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) return false;
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}
function isEmpty(stack) {
  return !stack.length;
}

// console.log(validParenthesis("((){}[])")); // true
// console.log(validParenthesis("(({}[])")); // false
// console.log(validParenthesis("(()){}[])")); // false
// console.log(validParenthesis(")(")); // false

// ===================================================QUESTION 3=========================================================

// Next Greater Element

//Function to find the next greater element for each element of the array.
function nextLargerElement(arr, n) {
  let stack = [];
  let result = new Array(n);
  //   const cache = {}
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length) result[i] = stack[stack.length - 1];
    else result[i] = -1;

    stack.push(arr[i]);
  }
  return result;
}
// console.log(nextLargerElement([6, 8, 0, 1, 3], 5)); //[ 8, -1, 1, 3, -1 ]
// console.log(nextLargerElement([1, 3, 4, 2], 4)); //[ 3, 4, -1, -1 ]
// console.log(nextLargerElement([1, 3, 2, 4], 4)); //[ 3, 4, 4, -1 ]

// ===================================================QUESTION 4=========================================================

// Next Greater Element 1
// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

function nextGreatestElement(nums1, nums2) {
  let stack = [];
  let result = new Array(nums1.length);
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && nums2[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (nums1.includes(nums2[i])) {
      let index = nums1.indexOf(nums2[i]);
      if (stack.length) {
        result[index] = stack[stack.length - 1];
      } else {
        result[index] = -1;
      }
    }
    stack.push(nums2[i]);
  }
  return result;
}
console.log(nextGreatestElement([4, 1, 2], [1, 3, 4, 2])); // [ -1, 3, -1 ]
console.log(nextGreatestElement([2, 4], [1, 2, 3, 4])); // [ 3, -1 ]
