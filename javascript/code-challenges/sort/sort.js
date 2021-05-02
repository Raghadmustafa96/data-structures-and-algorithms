function SelectionSort(arr) {
    let len = arr.length;
    let min = 0;
    let temp = 0;
    for (let i = 0; i < len - 1; i++) {
        min = i;
        console.log(arr);

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// module.exports = SelectionSort;
    let arr1 = [8,4,23,42,16,15];
    console.log(SelectionSort(arr1));