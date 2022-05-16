var arr = [1, 5, 3, 2];

// 冒泡排序
function bubbleSort(arr) {
    let temp;
    for(var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// 选择排序
function selectionSort(arr) {
    let index = 0;
    let temp = arr[0];
    let len = 0;
    while( len < arr.length) {
        for (var i=len+1; i < arr.length; i++ ) {
            if (arr[i] < temp) {
                temp = arr[i];
                index = i
            }
        }
        arr[index] = arr[len];
        arr[len] = temp; 
        len++
    }
    return arr;
}

console.log(selectionSort(arr))












