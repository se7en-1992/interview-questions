// 冒泡排序
function bubbleSort(arr) {
    let temp;
    let arr1 = [].concat(arr)
    for(var i = 0; i < arr1.length; i++) {
        for( var j = i + 1; j < arr1.length; j ++) {
            if (arr1[i] > arr1[j]) {
                temp = arr1[j];
                arr1[j] = arr1[i];
                arr1[i] = temp;
            }
        }
    }
    return arr1
}
// console.log(bubbleSort(arr))

// 快速排序

function quickSort(arr) {
    const sort = (arr1) => {
        if (arr1.length <= 1) return arr1
        let leftArr = [];
        let baseItem = arr1[0];
        let rightArr = [];
        for(var i = 1; i < arr1.length; i++) {
            if (arr1[i] < baseItem) {
                leftArr.push(arr1[i])
            } else {
                rightArr.push(arr1[i])
            }
        }
        const result = [...sort(leftArr), baseItem, ...sort(rightArr)]
        return result
    }

    return sort(arr)
}

// console.log(quickSort(arr))