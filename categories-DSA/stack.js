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
console.log(nextLargerElement([6, 8, 0, 1, 3], 5));
console.log(nextLargerElement([1, 3, 4, 2], 4));
console.log(nextLargerElement([1, 3, 2, 4], 4));
