// ==================================================== QUEUE ============================================================

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(elem) {
    this.queue.push(elem);
  }

  dequeue() {
    if (this.isEmpty()) console.log("Stack underflow");
    this.queue.shift();
  }

  front() {
    if (this.isEmpty()) console.log("Stack underflow");
    return this.queue[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ", ";
    }
    return queueString;
  }
}

const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(7);
// console.log("enqueue", queue.queue);

// queue.dequeue();
// queue.dequeue();
// console.log("dequeue", queue.queue);

// console.log("front", queue.front());
// console.log("size", queue.size());
// console.log("isEmpty", queue.isEmpty());
// console.log("printQueue", queue.printQueue());

// ==============================================CIRCULAR QUEUE==========================================================

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.cirQueue = [];
  this.size = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.cirQueue.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.cirQueue.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.cirQueue[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.cirQueue[this.cirQueue.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.cirQueue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.cirQueue.length === this.size;
};

var obj = new MyCircularQueue(4);
// console.log(obj.enQueue(10)); // true
// console.log(obj.enQueue(20)); // true
// console.log(obj.enQueue(30)); // true
// console.log(obj.enQueue(40)); // true
// console.log(obj.enQueue(50)); // false
// console.log(obj.cirQueue); // [ 10, 20, 30, 40 ]

// console.log(obj.deQueue()); // true
// console.log(obj.isFull()); // false
// console.log(obj.isEmpty()); // false
// console.log(obj.Front()); // 20
// console.log(obj.Rear()); // 40
// console.log(obj.enQueue(50)); // true
// console.log(obj.isFull()); // true
// console.log(obj.cirQueue); // [ 20, 30, 40, 50 ]

// console.log(obj.deQueue()); // true
// console.log(obj.deQueue()); // true
// console.log(obj.deQueue()); // true
// console.log(obj.deQueue()); // true
// console.log(obj.isEmpty()); // true

// ==============================================Implement Stack using Queues==========================================================

/*Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
*/

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */

// Push method 1
MyStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    const elem = this.q1.shift();
    this.q2.push(elem);
  }
  this.q1.push(x);
  while (this.q2.length !== 0) {
    const elem = this.q2.shift();
    this.q1.push(elem);
  }
  return this.q1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

var obj = new MyStack();
// obj.push(10);
// obj.push(20);
// obj.push(30);
// console.log(obj.q1);
// console.log(obj.pop());
// console.log(obj.q1);

/**
 * Your MyStack object will be instantiated and called as such:
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// ============================================== Implement Queue using Stacks ==========================================================

/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should
 * support all the functions of a normal queue (push, peek, pop, and empty).
 * Implement the MyQueue class:
 * void push(int x) Pushes element x to the back of the queue.
 * int pop() Removes the element from the front of the queue and returns it.
 * int peek() Returns the element at the front of the queue.
 * boolean empty() Returns true if the queue is empty, false otherwise.
 */

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

var obj = new MyQueue();
console.log(obj.push(10));
