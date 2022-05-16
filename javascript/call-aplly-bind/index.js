// call

Function.prototype.myCall = function (context, ...args) {
    context = context || window;
    
    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;
    
    context[fnSymbol](...args);
    delete context[fnSymbol];
}

Function.prototype.myApply = function(context, argsArr) {
    context = context || window;

    const symbolFn = Symbol('fn');
    context[symbolFn] = this;

    context[symbolFn](...argsArr);
    delete context[symbolFn];
}


Function.prototype.myBind = function(context, ...args) {
    context = context || window;
    const symbolFn = Symbol('fn');
    context[symbolFn] = this;

    return function(..._args) {
        const argsArr = args.concat(_args);
        context[symbolFn](...argsArr);
        delete context[symbolFn];
    }
}

var obj = {
    name: '123',
    say() {
        console.log(this.name)
    }
}

// var obj1 = { name: '57' }

// obj.say.myCall(obj1)