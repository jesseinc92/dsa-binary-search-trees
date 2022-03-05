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
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (newNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else {
      if (!currentNode.right) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;

    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return currentNode;
      if (val < currentNode.val) currentNode = currentNode.left;
      if (val > currentNode.val) currentNode = currentNode.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!this.root) return;

    if (val === current?.val) return current;
    if (val < current?.val) return this.findRecursively(val, current.left);
    if (val > current?.val) return this.findRecursively(val, current.right);
    return;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    if (!this.root) return visited;

    visited.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, visited);
    if (node.right) this.dfsPreOrder(node.right, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (!this.root) return visited;

    if (node.left) this.dfsInOrder(node.left, visited);
    visited.push(node.val);
    if (node.right) this.dfsInOrder(node.right, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (!this.root) return visited;

    if (node.left) this.dfsPostOrder(node.left, visited);
    if (node.right) this.dfsPostOrder(node.right, visited);
    visited.push(node.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const toVisit = [this.root];
    const visited = [];
    if (!this.root) return visited;

    let currentNode;
    while (toVisit.length) {
      currentNode = toVisit.shift();

      if (currentNode) {
        visited.push(currentNode.val);
        toVisit.push(currentNode.left);
        toVisit.push(currentNode.right);
      }
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
