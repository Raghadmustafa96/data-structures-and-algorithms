const LinkedList = require('../Data-Structures/linkedList/linked-list.js');

  class HashTable {
    table = new Array(50);
  
    add(key, value) {
      let hash = this.getHash(key);
  
      if (!this.table[hash]) {
        this.table[hash] = new LinkedList();
      }
  
      this.table[hash].insert({ key, value });
    }
  
    getHash(key) {
      let hash = 353;
      for (let i = 0; i < key.length; i++) {
        hash = hash * 599 * key.charCodeAt(i) % this.table.length;
      }
      return hash;
    }
  
    find(key) {
        let hash = this.getHash(key);
    console.log(this.table[hash]);
        if (this.table[hash] === undefined) {
            return null;
        } 

        let current = this.table[hash].head;
        while (current) {
          if (current.data.key == key) {
            return current.data.value;
          }
          current = current.next;
        }
        return false;
    }

    contains(key) {
        let hash = this.getHash(key);

        if(this.table[hash]){
            return true;
         } else {
            return false;
         }
      }
      
  }
  
//   const hashTable = new HashTable();
//   hashTable.add('firstName1', 'raghad');
//   hashTable.add('firstName2', 'majd');
//   hashTable.add('firstName3', 'ahmad');
//   hashTable.add('1111', 'software eng');
//   hashTable.add('3333', 'test');
//   hashTable.add('color', 'red');
 
//   console.log( hashTable.find('color'));//red
//   console.log( hashTable.contains('firstName3'));//true

module.exports = HashTable;