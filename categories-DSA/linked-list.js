class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add Node to the End of the Linked List
  addElement(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
    return this.size;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
    let node = new Node(element);
    if (index < 0 || index > this.size) {
      return "Invalid index";
    }
    let curr, prev;

    curr = this.head;
    if (index == 0) {
      node.next = curr;
      this.head = node;
    } else {
      let i = 0;
      curr = this.head;

      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }

  removesFrom(index) {
    if (index < 0 || index > this.size) {
      return "Invalid index";
    }
    let curr, prev;

    curr = this.head;
    prev = curr;

    if (index === 0) {
      this.head = curr.next;
    } else {
      let i = 0;
      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      prev.next = curr.next;
    }

    this.size--;
    return curr;
  }

  removeElement(element) {
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (curr.data === element) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.data;
      }

      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  indexOf(element) {
    let prev, curr;
    curr = this.head;

    let i = 0;
    while (curr) {
      if (curr.data === element) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  listSize() {
    return this.size;
  }

  printList() {
    let list = "";
    let curr = this.head;
    for (let i = 0; i < this.size; i++) {
      list = list + curr.data + " ";
      curr = curr.next;
    }
    return list;
  }
}

let list = new LinkedList();

console.log("isEmpty", list.isEmpty());
console.log("size", list.listSize());

console.log("add element", list.addElement(10));
console.log("add element", list.addElement(20));
console.log("add element", list.addElement(30));
console.log("add element", list.addElement(40));

console.log("isEmpty", list.isEmpty());
console.log("size", list.listSize());

console.log("printList", list.printList());

console.log("insert in mid", list.insertAt(50, 2));

console.log("printList", list.printList());

console.log("removes from mid", list.removesFrom(3));

console.log("printList", list.printList());

console.log("remove element", list.removeElement(50));

console.log("printList", list.printList());

console.log("find element index", list.indexOf(10));

console.log("printList", list.printList());

// ================================= Remove Nth Node From End of List ======================================================

/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

// ======================================== Reverse Linked List ======================================================

/**Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    const node = current.next;
    current.next = prev;
    prev = current;
    current = node;
  }
  return prev;
};

// ======================================== 234. Palindrome Linked List ======================================================

/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let string1 = "",
    string2 = "";

  while (current) {
    string1 = `${string1}${current.val}`;
    string2 = `${current.val}${string2}`;
    current = current.next;
  }
  return string1 === string2;
};

// ======================================== 237. Delete a given node from LinkedList ======================================================

/**
 * Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let current = node;
  current.val = current.next.val;
  current.next = current.next.next;
};

// ======================================== 2. Add Two Numbers ======================================================

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 != null || l2 != null || carry > 0) {
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;

    let sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;

    current.next = new ListNode(sum);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};
