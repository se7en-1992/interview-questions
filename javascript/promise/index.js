// /**
//  * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行
//  * 2. executor 接受两个参数，分别是 resolve 和 reject
//  * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
//  * 4. promise 的状态一旦确认，就不会再改变
//  * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 
//  *      和 promise 失败的回调 onRejected
//  * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
//  *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
//  *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
//  * 7. then 的参数 onFulfilled 和 onRejected 可以缺省
//  * 8. promise 可以then多次，promise 的then 方法返回一个 promise
//  * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)
//  * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
//  * 11.如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，
//  *   就走下一个then的成功，如果失败，就走下一个then的失败
//  */
function _Promise(executor) {
    let self = this;
    self.value = void 0;
    self.reson = void 0;
    self.status = 'pending';
    self.onFulfilled = [];
    self.onRejected = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'fulfilled';
            self.value = value;
            self.onFulfilled.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.reson = reason;
            self.onRejected.forEach(fn => fn());
        }
    }

    executor(resolve, reject)
}

_Promise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    let promise2 =  new _Promise((resolve, reject) => {
        if (self.status === 'fulfilled') {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2, x, resolve, reject);
                } catch(e) {
                    reject(e)
                }
            })
        } else if (self.status === 'rejected') {
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject)
                } catch(e) {
                    reject(e);
                }
            })
        } else if (self.status === 'pending') {
            self.onFulfilled.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(e) {
                        reject(e)
                    }
                })
            });
            self.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(e) {
                        reject(e)
                    }
                })
            })
        }
    });

    return promise2;
}

// 主要用来判断x的返回值的类型，根据返回值的类型
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return new TypeError('循环引用了~');
    }

    if (x && typeof x === 'object' || typeof x === 'function') {
        let isCalled = false;
        try {
            const then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (isCalled) return;
                    isCalled = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, r => {
                    if (isCalled) return;
                    isCalled = true;
                    reject(r);
                })
            } else {
                if (isCalled) return;
                isCalled = true;
                resolve(x);
            }
        } catch(e) {
            if (isCalled) return;
            isCalled = true;
            reject(e)
        }
    } else {
        resolve(x)
    }
};

_Promise.prototype.all = function(promises) {
    let resolveNum = 0;
    let resolvedValues = [];
    return new _Promise((resolve, reject) => {
        promises.forEach(promise => {
            _Promise.resolve(promise).then((value) => {
                resolveNum++;
                resolveNum.push(value);
                if (resolveNum === promises.length) {
                    return resolve(resolvedValues);
                }
            }, (e) => {
                return reject(e)
            })
        })
    })
}