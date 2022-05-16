let a = [1, 2, 3, 4, 5];

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

Array.prototype._flat = function(deep = 1) {
  let newArr = []
  let _deep = deep
  for(var i=0; i < this.length; i++) {
    if (Array.isArray(this[i]) && deep > 0) {
      deep--
      newArr = newArr.concat(this[i]._flat(deep))
      deep = _deep
    } else {
      newArr.push(this[i])
    }
  }
  return newArr
}

var flatArr = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11, [12, 13, 14]]]];
var deep = 2;

console.log(flatArr._flat(deep));

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


function flatten(arr, deep = 1) {
  let newArr = []

  const rec = (arr, deep) => {
    for(var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && deep >= 0) {
        deep--
        rec(arr[i], deep)
      } else {
        newArr.push(arr[i])
      }
    }
  }

  rec(arr, deep)

  return newArr
}