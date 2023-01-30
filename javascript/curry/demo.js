function curry() {
  const arr = [...arguments];

  function fn(...args) {
    arr.push(...args);
    return fn;
  }

  fn.toString = function() {
    return arr.reduce((a, b) => a + b)
  };

  return fn;
}

console.log(curry(1)(2)(3).toString());

const add  = (x, y) => x + y;

const memoize = (fn) => {
  let cache = Object.create(null);
  const context = this || window;

  return function(...key) {
    if (!cache[key]) {
      cache[key] = fn.call(context, ...key)
    }
    return cache[key];
  }
}

const sum = memoize(add);
console.log(sum(100, 200))
console.log(sum(100, 200))