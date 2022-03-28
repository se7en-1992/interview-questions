let a = [1, 2, 3, 4, 5];
// Array.prototype.myForEach = function (callback) {
//     let arg2 = arguments[1] || window;
//     for (let i = 0; i < this.length; i++) {
//       callback.apply(arg2, [this[i], i, this]);
//     }
// };
// a.myForEach((item, index, self) => console.log(item))

// Array.prototype.myMap = function (callback) {
//     let arg2 = arguments[1] || window;
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       // 这里需要对对象进行深拷贝，这里就省略了
//       newArr.push(callback.apply(arg2, [this[i], i, this]));
//     }
//     return newArr;
// };
// const mapArr = a.myMap((item, index, self) => item + 1);
// console.log(mapArr);

// Array.prototype.myFilter = function (callback) {
//     let arg2 = arguments[1] || window;
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//        // 这里需要对对象进行深拷贝，这里就省略了
//       callback.apply(arg2, [this[i], i, this]) ? newArr.push(this[i]) : newArr;
//     }
//     return newArr;
// };

// const filterArr = a.myFilter((item, index, self) => item > 1);
// console.log(filterArr);

// Array.prototype.myEvery = function (callback) {
//     let arg2 = arguments[1] || window;
//     let gate = true;
//     for (let i = 0; i < this.length; i++) {
//       if (!callback.apply(arg2, [this[i], i, this])) {
//         gate = false;
//         break;
//       }
//     }
//     return gate;
// };

// const every = a.myEvery((item, index, self) => item > 1);
// console.log(every);

// Array.prototype.mySome = function (callback) {
//     let arg2 = arguments[1] || window;
//     let gate = false;
//     for (let i = 0; i < this.length; i++) {
//       if (callback.apply(arg2, [this[i], i, this])) {
//         gate = true;
//         break;
//       }
//     }
//     return gate;
// };

// const some = a.mySome((item, index, self) => item > 1);
// console.log(some);

// Array.prototype.myReduce = function (callback, initialValue = 0) {
//     for (let i = 0; i < this.length; i++) {
//         // 这里需要对对象进行深拷贝，这里就省略了
//       initialValue = callback(initialValue, this[i], i, this);
//     }
//     return initialValue;
// };

// const sum = a.myReduce((a, b) => a + b);
// console.log(sum);

// Array.prototype.myReduceRight = function (callback, initialValue = 0) {
//     for (let i = this.length - 1; i >= 0; i--) {
//         // 这里需要对对象进行深拷贝，这里就省略了
//       initialValue = callback(initialValue, this[i], i, this);
//     }
//     return initialValue;
// };

// const sumRight = a.myReduceRight((a, b) => a + b);
// console.log(sumRight);

Array.prototype._forEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn.apply(window, [this[i], i, this])
  }
}

Array.prototype._map = function(fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(fn.apply(window, [this[i], i, this]))
  }
  return arr;
}


Array.prototype._filter  = function(fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn.apply(window, [this[i], i, this])) {
      arr.push(this[i])
    }
  }
  return arr;
}

Array.prototype._some  = function(fn) {
  let _flag = false;
  for (let i = 0; i < this.length; i++) {
    if (fn.apply(window, [this[i], i, this])) {
      _flag = true;
      break;
    }
  }
  return _flag;
}

Array.prototype._every  = function(fn) {
  let _flag = true;
  for (let i = 0; i < this.length; i++) {
    if (!fn.apply(window, [this[i], i, this])) {
      _flag = false;
      break;
    }
  }
  return _flag;
}

Array.prototype._reduce = function(fn, initValue = 0) {
  for (let i = 0; i < this.length; i++) {
    initValue = fn.apply(window, [initValue, this[i], i, this])
  }
  return initValue
}

function deepClone (obj, hash = new WeakMap()) {
  if (!obj) return;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (!obj instanceof Object) return obj;
  if (hash.has(obj)) return has.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}