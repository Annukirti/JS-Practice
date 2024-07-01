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
