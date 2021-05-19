let HashTable = require('../hashtable/hashtable');

function leftJoin(left, right) {
    let fullArr = [];
    let flag = false;

    let arrLeft = []
    let arrRight = []

    for (let i = 0; i < left.table.length; i++) {
        if (left.table[i]) {
            arrLeft.push(left.table[i])
        }
    }

    for (let i = 0; i < right.table.length; i++) {
        if (right.table[i]) {
            arrRight.push(right.table[i])
        }
    }

    for (let i = 0; i < arrLeft.length; i++) {
        for (let j = 0; j < arrRight.length; j++) {
            if (arrLeft[i].head.data.key === arrRight[j].head.data.key) {
                fullArr.push([arrLeft[i].head.data.key, arrLeft[i].head.data.value, arrRight[j].head.data.value]);
                flag = true;
            }
        }

        if (!flag) {
            fullArr.push([arrLeft[i].head.data.key, arrLeft[i].head.data.value, 'Null']);
        }
        flag = false;

    }
    return fullArr;
}

module.exports = leftJoin;

