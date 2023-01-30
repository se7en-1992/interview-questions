// 数组去重
let arr = [1, 2, 3, 4, 5, 2, 3, 4, 6, 9, 6, 8, 7];

// 1.利用Set去重
const arr1 = [...new Set(arr)];
// console.log(arr1);

// 2.filter
const arr2 = arr.filter((item, pos, self) => self.indexOf(item) === pos);
// console.log(arr2);

// 3. obj

let obj = {};
arr.forEach(item => {
    obj[item] = item
});
const arr3 = Object.keys(obj);
// console.log(arr3);