let HashTable = require('../hashtable/hashtable');

function repeatedWord(str) {
    let hashTable = new HashTable(100);
    let arr2 = str.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g);

    for (let i = 0; i < arr2.length; i++) {
        let k = arr2[i].toLowerCase();

        if (hashTable.find(k) == k) {
            return hashTable.find(k);
        } else {
            hashTable.add(k, k);
        }
    }

    return null;
}

// let arr = 'It  was was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'
// console.log(repeatedWord(arr))

module.exports = repeatedWord;