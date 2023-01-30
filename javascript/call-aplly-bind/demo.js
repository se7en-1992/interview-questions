var obj = {
  a: 1,
  getName: function() {
    console.log(this.a);
  }
}

var obj2 = { a: 2 };

Function.prototype.mycall = function(context, ...args) {
  context = context || window;
  const tempSymbol = Symbol('fn');
  context[tempSymbol] = this;

  context[tempSymbol](...args);
  delete context[tempSymbol];
}

obj.getName.mycall(obj2)

Function.prototype.myapply = function(context, args = []) {
  context = context || window;
  const tempSymbol = Symbol('fn');
  context[tempSymbol] = this;

  context[tempSymbol](...args);
  delete context[tempSymbol];
}

obj.getName.myapply(obj2)

Function.prototype.mybind = function(context, ...args) {
  context = context || window;
  const tempSymbol = Symbol('fn');
  context[tempSymbol] = this;

  return function(...argsArr) {
    const newArgs = args.concat(argsArr);
    context[tempSymbol](...newArgs);
    delete context[tempSymbol];
  }
}

obj.getName.mybind(obj2)()