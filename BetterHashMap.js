const Chain = require('./Chain');

class BetterHashMap {

  constructor(initialCapacity=8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    return this._hashTable[index].get(key);
  }

  set(key, value){
    const loadRatio = (this.length + 1) / this._capacity;
    if (loadRatio > BetterHashMap.MAX_LOAD_RATIO) {
      this._capacity = (this._capacity * BetterHashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key); // ???

    if (this._hashTable[index] === undefined) {
      this._hashTable[index] = new Chain();
    }

    this._hashTable[index].insert({ key, value });
    this.length++;
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }

    slot.delete(key);

    this.length--;
  }

  // Find Index
  _findSlot(key) {
    const hash = BetterHashMap._hashString(key);
    const start = hash % this._capacity;
    const index = start % this._capacity; // ????

    return index;
    // for (let i=start; i<start + this._capacity; i++) {
    //   const index = i % this._capacity;
    //   const slot = this._hashTable[index];
    //   if (slot === undefined || (slot.key === key && !slot.DELETED)) {
    //     return index;
    //   }
    // }
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

module.exports = BetterHashMap;
