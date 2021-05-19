'use strict';
const leftJoin = require('../leftJoin.js');
const Hashtable = require('../../hashtable/hashtable.js');

describe('leftJoin', () => {

  it('should left join ', () => {
    const leftHash = new Hashtable(10);
    const rightHash = new Hashtable(10);

    leftHash.add('fon', 'enamored');
    leftHash.add('warath', 'anger');
    leftHash.add('outift', 'grab');
    leftHash.add('guid', 'usher');

    rightHash.add('fon', 'averse');
    rightHash.add('warath', 'delight');
    rightHash.add('guid', 'follow');
    rightHash.add('flow', 'jam');


    expect(leftJoin(leftHash, rightHash)).toEqual([
      [ 'guid', 'usher', 'follow' ],
      [ 'outift', 'grab', 'Null' ],
      [ 'fon', 'enamored', 'averse' ],
      [ 'warath', 'anger', 'delight' ]
    ]);
  });
})
