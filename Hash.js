class HashTable.prototype. {
  constructor() {
    this.values = {};
    this.length =  0;
    this.size =  0;
  }

  HashTable.prototype.calculateHash(key) {
    return key.toString().length % this.size;
  }

  HashTable.prototype.add(key, value) {
    const hash = this.calculateHash(key);
    If (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
    this.values[hash][key] = value;
  }

  HashTable.prototype.search(key) {
     const hash = this.calculateHash(key);
     if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
     } else {
       return null;
     }
  }
}
module.exports = HashTable;