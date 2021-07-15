class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      let currentNode = this.root;
      let traversing = true;
      do {
        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = new Node(val);
            traversing = false;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = new Node(val);
            traversing = false;
          } else {
            currentNode = currentNode.right;
          }
        }
      } while (traversing);
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function insertHelper(node) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          return;
        } else insertHelper(node.left);
      } else {
        if (node.right === null) {
          node.right = new Node(val);
          return;
        } else insertHelper(node.right);
      }
    }
    if (this.root === null) this.root = new Node(val);
    else insertHelper(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return undefined;
    else {
      let currentNode = this.root;
      let iterating = true;
      do {
        if (currentNode.val === val) return currentNode;
        else if (val < currentNode.val) {
          if (currentNode.left === null) return undefined;
          else currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) return undefined;
          else currentNode = currentNode.right;
        }
      } while (iterating);
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findHelper(node) {
      if (node === null) return undefined;
      else if (node.val === val) return node;
      else if (val < node.val) return findHelper(node.left);
      else return findHelper(node.right);
    }
    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    function preOrderHelper(node) {
      if (node) {
        visitedNodes.push(node.val);
        preOrderHelper(node.left);
        preOrderHelper(node.right);
      }
    }
    preOrderHelper(this.root);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    function inOrderHelper(node) {
      if (node) {
        inOrderHelper(node.left);
        visitedNodes.push(node.val);
        inOrderHelper(node.right);
      }
    }
    inOrderHelper(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    function postOrderHelper(node) {
      if (node) {
        postOrderHelper(node.left);
        postOrderHelper(node.right);
        visitedNodes.push(node.val);
      }
    }
    postOrderHelper(this.root);
    return visitedNodes;
  }
}

module.exports = BinarySearchTree;
