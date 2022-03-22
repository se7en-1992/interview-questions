let a = [1, 2, 3, 4, 5];
Array.prototype.myForEach = function (callback) {
    let arg2 = arguments[1] || window;
    for (let i = 0; i < this.length; i++) {
      callback.apply(arg2, [this[i], i, this]);
    }
};
a.myForEach((item, index, self) => console.log(item))

Array.prototype.myMap = function (callback) {
    let arg2 = arguments[1] || window;
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      // 这里需要对对象进行深拷贝，这里就省略了
      newArr.push(callback.apply(arg2, [this[i], i, this]));
    }
    return newArr;
};
const mapArr = a.myMap((item, index, self) => item + 1);
console.log(mapArr);

Array.prototype.myFilter = function (callback) {
    let arg2 = arguments[1] || window;
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
       // 这里需要对对象进行深拷贝，这里就省略了
      callback.apply(arg2, [this[i], i, this]) ? newArr.push(this[i]) : newArr;
    }
    return newArr;
};

const filterArr = a.myFilter((item, index, self) => item > 1);
console.log(filterArr);

Array.prototype.myEvery = function (callback) {
    let arg2 = arguments[1] || window;
    let gate = true;
    for (let i = 0; i < this.length; i++) {
      if (!callback.apply(arg2, [this[i], i, this])) {
        gate = false;
        break;
      }
    }
    return gate;
};

const every = a.myEvery((item, index, self) => item > 1);
console.log(every);

Array.prototype.mySome = function (callback) {
    let arg2 = arguments[1] || window;
    let gate = false;
    for (let i = 0; i < this.length; i++) {
      if (callback.apply(arg2, [this[i], i, this])) {
        gate = true;
        break;
      }
    }
    return gate;
};

const some = a.mySome((item, index, self) => item > 1);
console.log(some);

Array.prototype.myReduce = function (callback, initialValue = 0) {
    for (let i = 0; i < this.length; i++) {
        // 这里需要对对象进行深拷贝，这里就省略了
      initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
};

const sum = a.myReduce((a, b) => a + b);
console.log(sum);

Array.prototype.myReduceRight = function (callback, initialValue = 0) {
    for (let i = this.length - 1; i >= 0; i--) {
        // 这里需要对对象进行深拷贝，这里就省略了
      initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
};

const sumRight = a.myReduceRight((a, b) => a + b);
console.log(sumRight);

