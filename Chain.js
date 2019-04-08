class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Chain {
  constructor() {
    this.head = null;
  }

  insert(data) {
    if (this.head === null) {
      this.head = new _Node(data, null);
      return;
    }
    let node = this.head;
    this.head = new _Node(data, node);
  }

  get(key) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  delete(key) {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        if (prevNode === null) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

module.exports = Chain;
