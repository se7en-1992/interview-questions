// 冒泡排序 对比相邻元素大小，进行换位
function bubbleSort(arr){
    const i=arr.length-1;//初始时,最后位置保持不变  
    while(i>0){
     let pos = 0;//每趟开始时,无记录交换
     for(let j = 0; j < i; j++){
        if(arr[j] > arr[j+1]){
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
            pos = j;//记录最后交换的位置  
        }   
     }
     i = pos;//为下一趟排序作准备
    }
    return arr;
}

// 选择排序 寻找最小数进行前移操作

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 插入排序 判断当前元素是否已经处理后当前位置最大

function insertionSort(arr) {
    const len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}


// 归并排序
function mergeSort(arr) {  // 采用自上而下的递归方法
    const len = arr.length;
    if(len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// 快速排序
function quickSort (arr) {
    const rec = (arr) => {
      if (arr.length <= 1) { return arr; }
      const left = [];
      const right = [];
      const mid = arr[0]; // 基准元素
      for (let i = 1; i < arr.length; i++){
        if (arr[i] < mid) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return [...rec(left), mid, ...rec(right)]
    }
    return rec(arr)
};

// 二分查找
function BinarySearch(arr, target) {
    if (arr.length <= 1) return -1
    // 低位下标
    let lowIndex = 0
    // 高位下标
    let highIndex = arr.length - 1

    while (lowIndex <= highIndex) {
        // 中间下标
        const midIndex = Math.floor((lowIndex + highIndex) / 2)
        if (target < arr[midIndex]) {
            highIndex = midIndex - 1
        } else if (target > arr[midIndex]) {
            lowIndex = midIndex + 1
        } else {
            // target === arr[midIndex]
            return midIndex
        }
    }
    return -1
}