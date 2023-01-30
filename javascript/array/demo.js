var arr  = [3,2,1];
Array.prototype._map = function(fn) {
  const newArr = [];
  const context = this || window;
  for(let i = 0; i < this.length; i++) {
    newArr.push(fn.call(context, this[i], i, this));
  }
  return newArr;
}

console.log(arr._map(v => v+ 1));

Array.prototype._reduce = function(fn, initvalue = 0) {
  const context = this || window;
  for (let i = 0; i < this.length; i++) {
    initvalue = fn.call(context, initvalue, this[i], i, this);
  }
  return initvalue;
}

console.log(arr._reduce((a, b) => a + b));

const arr2 = [1, 2, 3, [1,2], [1,[1,2]]];

function flatt (arr, deep = 1) {
  const newArr = [];

  const rec = (child, deepChild) => {
    for (let i = 0; i < child.length; i++) {
      if (Array.isArray(child[i]) && deepChild >= 0) {
        deepChild--;
        rec(child[i], deepChild);
      } else {
        newArr.push(child[i]);
      }
    }
  };

  rec (arr, deep);

  return newArr;
}

console.log(flatt(arr2, 1));

function deepClone (obj, hash = new WeakMap()) {
  if (!obj) return;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }

  return cloneObj;
}
const arr3 = deepClone(arr2)
console.log(arr3);
arr3[4][1][0] = 2;
console.log(arr3);
console.log(arr2);

function quickSort(arr) {
  const sort = (arr) => {
    if (arr.length <= 1) return arr;
    const leftArr = [];
    const rightArr = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mid) {
        rightArr.push(arr[i]);
      } else {
        leftArr.push(arr[i]);
      }
    }
    return [...sort(leftArr), mid, ...sort(rightArr)];
  };

  return sort(arr)
}

console.log(quickSort(arr));

const repeatArr = [1,1,2,2,3,3];

const deleteArr = [...new Set(repeatArr)];
console.log(deleteArr);

const deleteArr2 = repeatArr.filter((value, pos, self) => self.indexOf(value) === pos);
console.log(deleteArr2);