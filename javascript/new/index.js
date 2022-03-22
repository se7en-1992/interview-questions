function create(fn, ...args) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    // Object.setPrototypeOf(obj, fn.prototype)
    let result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
}

// 1.创建一个空的简单JavaScript对象（即{}）；
// 2.为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 3.将步骤1新创建的对象作为this的上下文 ；
// 4.如果该函数没有返回对象，则返回this。