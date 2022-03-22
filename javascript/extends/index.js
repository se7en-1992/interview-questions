// 1.原型继承

function Parent() {
    this.name = 'parent'
    this.play = [1, 2, 3]
}

Parent.prototype.getName = function() {
    return this.name
}

function Child() {
    this.type = 'child';
}

Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.play.push(4);
console.log(child1.play, child1.play); // [1,2,3,4]

// 改变child1的play属性，会发现child1也跟着发生变化了，这是因为两个实例使用的是同一个原型对象，内存空间是共享的


// 2.构造函数继承
function Parent1(){
    this.name = 'parent1';
}

Parent1.prototype.getName = function () {
    return this.name;
}

function Child1() {
    Parent1.call(this);
    this.type = 'child1';
}

let child = new Child1();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错

// 可以做到属性分析，但是不能继承原型属性或方法

// 3.组合继承

function Parent2() {
    this.name = 'parent2';
    this.play = [1, 2, 3];
}

Parent2.prototype.getName = function () {
    return this.name;
}

function Child2() {
    // 第二次调用 Parent3()
    Parent2.call(this);
    this.type = 'child2';
}
// 第一次调用 Parent3()
Child2.prototype = new Parent2();
// 手动挂上构造器，指向自己的构造函数
Child2.prototype.constructor = Child2;
var s3 = new Child2();
var s4 = new Child2();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'

// 这种方式看起来就没什么问题，方式一和方式二的问题都解决了，但是从上面代码我们也可以看到Parent3 执行了两次，造成了多构造一次的性能开销

// 4. 原型式继承

let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person4 = Object.create(parent4);
  person4.name = "tom";
  person4.friends.push("jerry");

  let person5 = Object.create(parent4);
  person5.friends.push("lucy");

  console.log(person4.name); // tom
  console.log(person4.name === person4.getName()); // true
  console.log(person5.name); // parent4
  console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
  console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]

  // 这种继承方式的缺点也很明显，因为Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能

//   5. 寄生式继承

let parent6 = {
    name: "parent6",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

let person6 = clone(parent6);

console.log(person5.getName()); // parent6
console.log(person5.getFriends()); // ["p1", "p2", "p3"]

// 6.寄生组合式继承

function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Parent7() {
    this.name = 'parent7';
    this.play = [1, 2, 3];
}
Parent7.prototype.getName = function () {
    return this.name;
}
function Child7() {
    Parent6.call(this);
    this.friends = 'child7';
}

clone(Parent7, Child7);

Child7.prototype.getFriends = function () {
    return this.friends;
}

let person7 = new Child6();
console.log(person7); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
console.log(person7.getName()); // parent6
console.log(person7.getFriends()); // child5