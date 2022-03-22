function add() {
    const _args = [...arguments];
    function fn() {
        _args.push(...arguments);
        return fn
    }
    fn.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return fn
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5).toString());  // 15
console.log(add(1, 2, 3, 4)(5).toString());  // 15
console.log(add(1)(2)(3)(4)(5).toString());  // 15
console.log(add(1)(2)(3)(4)(5)(6).toString());  // 15

