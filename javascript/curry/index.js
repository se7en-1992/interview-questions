function add() {
    const _args = [...arguments];
    function fn() {
        _args.push(...arguments);
        return fn
    }
    fn.toString = function () {
        return _args.reduce((a, b) => a + b);
    }
    return fn
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5).toString());  // 15
console.log(add(1, 2, 3, 4)(5).toString());  // 15
console.log(add(1)(2)(3)(4)(5).toString());  // 15
console.log(add(1)(2)(3)(4)(5)(6).toString());  // 15

var add = function (x,y) {
    return x+y;
}

const memoize = function (func, content) {
    let cache = Object.create(null)
    content = content || this
    return (...key) => {
        if (!cache[key]) {
        cache[key] = func.apply(content, key)
        }
        return cache[key]
    }
}

const calc = memoize(add);
const num1 = calc(100,200)
const num2 = calc(100,200) // 缓存得到的结果

console.log(num1, num2);