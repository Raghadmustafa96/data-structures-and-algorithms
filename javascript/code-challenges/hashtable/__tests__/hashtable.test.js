'use strict';
const HashTable = require('../hashtable.js');


describe('HashTable', () => {

  const hashTable = new HashTable();
  hashTable.add('firstName1', 'raghad');
  hashTable.add('firstName2', 'majd');
  hashTable.add('firstName3', 'ahmad');
  hashTable.add('1111', 'software eng');
  hashTable.add('3333', 'test');
  hashTable.add('color', 'red');

  it('should Adding a key/value to your hashTable results in the value being in the data structure', () => {
    expect(hashTable.find('firstName1')).toEqual('raghad');
    expect(hashTable.contains('color')).toEqual(true);
  });

  it('should return the value stored based on a key ', () => {
    expect(hashTable.find('color')).toEqual('red');
  });

  it('should retrieve a value from a bucket within the hashTable that has a collision', () => {
    let hash = hashTable.getHash('firstName1');
    expect(hashTable.table[hash].length).toEqual(3);
    expect(hashTable.find('firstName1')).toEqual('raghad');
    expect(hashTable.find('firstName2')).toEqual('majd');
    expect(hashTable.find('firstName3')).toEqual('ahmad');
  });
});
