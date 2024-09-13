/**
 * A tree is a collection of nodes connected by some edges. A tree is a non linear data structure.
 * A Binary Search tree is a binary tree in which nodes that have lesser value are stored on the
 * left while the nodes with a higher value are stored at the right.
 * In a binary tree, a node always has its two children – left and right children.
 * The left and right children of any node can be another node or may be NULL.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      return (this.root = newNode);
    }
    this.insertNewNode(this.root, newNode);
  }

  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  // DFS:preOrder,inOrder,postOrder
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // BFS
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const frontNode = queue.shift();
      console.log(frontNode.value);
      if (frontNode.left) {
        queue.push(frontNode.left);
      }
      if (frontNode.right) {
        queue.push(frontNode.right);
      }
    }
  }

  minNode(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minNode(root.left);
    }
  }

  maxNode(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxNode(root.right);
    }
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

console.log("insert a node", bst.insert(10));
console.log("insert a node", bst.insert(5));
console.log("insert a node", bst.insert(15));
console.log("insert a node", bst.insert(3));
console.log("insert a node", bst.insert(7));

console.log("search a node", bst.search(bst.root, 30));
console.log("search a node", bst.search(bst.root, 40));
console.log("search a node", bst.search(bst.root, 10));

console.log("preOrder", bst.preOrder(bst.root));

console.log("inOrder", bst.inOrder(bst.root));

console.log("postOrder", bst.postOrder(bst.root));

console.log("BFS: levelOrder", bst.levelOrder());

console.log("minNode", bst.minNode(bst.root));

console.log("maxNode", bst.maxNode(bst.root));
