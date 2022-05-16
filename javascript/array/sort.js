var arr = [1, 5, 3, 2];

function quickSort(arr) {
    const sort = (arr) => {
        if (arr.length <= 1) return arr
        let leftArr = [];
        let mid = arr[0];
        let rightArr = [];
        for(let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }
        return [...sort(leftArr), mid, ...sort(rightArr)]
    }

    return sort(arr)
}

console.log(quickSort(arr))