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

class BetterHashMap {

  constructor() {
    this.length = 0;
    this._hashTable = [];
    
  }

  get(key) {
    const hash = BetterHashMap._hashString(key);
    const index = hash % this.length;
    const chain = this._hashTable[index];

    return chain.get(key);
  }

  set(key, value) {
    //Find the slot where this key should be in
    
    //const index = this._findSlot(key);
    const hash = BetterHashMap._hashString(key);
    
    const index = hash % this.length;
    console.log(hash, this.length)
    if (!this._hashTable[index].head) {
      this._hashTable[index] = new Chain();
    }
    this._hashTable[index].insert({ key: key, value: value });

    if (!this._hashTable[index]) {
      this.length++;
    }
    this._hashTable[index] = {
      key,
      value,
      next: null
    };
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }

    //TODO delete item for linkedList
    slot.next = null;
    this.length--;
  }

  _findSlot(key) {
    const hash = BetterHashMap._hashString(key);
    const index = hash % this.length;

    let chain = this._hashTable[index];
    // case for there is collision if key exists head is new item, old head is next property of new head
    if (chain !== undefined) {
      return chain.get(key);
    }
    
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure has is unsigned - meaning non-negtive number.
    return hash >>> 0;
  }
}

function test() {
  let tMap = new BetterHashMap();
  tMap.set('test1', 'foo');
  tMap.set('test2', 'bar');
  tMap.set('test3', 'buzz');
  //console.log(JSON.stringify(testList, null, 2));
  //console.log(tMap);
}
test();
module.exports = BetterHashMap;