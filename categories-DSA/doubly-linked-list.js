class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addToStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  addToLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (!current.next) {
      current = current.next;
    }

    newNode.prev = current;
    current.next = newNode;
  }

  addAtGivenIndex(index, data) {
    if (index < 0 || index >= this.size()) {
      return "Invalid index";
    }
    const newNode = new Node(data);
    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        return;
      }
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let i = 0;
    let current = this.head;
    let prev = null;
    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    newNode.prev = prev;
    newNode.next = current;
    prev.next = newNode;
    current.prev = newNode;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.prev.next = null;
  }

  removeFromIndex(index) {
    if (index < 0 || index >= this.size()) {
      return "Invalid index";
    }
    if (index === 0) {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
        return;
      }
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.prev.next = current.next;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  printList() {
    let list = "";
    if (!this.head) {
      return null;
    }
    let curr = this.head;
    if (!curr.next) {
      return curr.data;
    }
    while (curr.next) {
      list = list + curr.data + " ";
      curr = curr.next;
    }
    return list;
  }
}

const double = new DoublyLinkedList();

console.log(double.addToStart(1));
double.addToStart(2);
double.addToStart(7);
double.addToStart(12);
double.addToStart(11);
double.addAtGivenIndex(2, 9);
double.addAtGivenIndex(6, 19);
double.addAtGivenIndex(0, 29);

console.log(double.printList());

double.removeFirst();

console.log(double.printList());
double.removeLast();
// double.removeLast();
console.log(double.printList());
double.removeFromIndex(0);
console.log(double.printList());
