# 1. BFC布局
块级格式化上下文
渲染规则：
- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

`BFC目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素`

触发BFC的条件包含不限于：
- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed


# 2. CommonJs/AMD/UMD/ES6模块区别

Commonjs => moudlue.exports(exports)/require => nodejs => 同步
AMD => requirejs/ define/ require('./index.js', function() => {}) => 异步
UMD => 集成AMD、AMD、CMD => 判断AMD 判断Commonjs 
ES6 => import export

```js
// UMD简单实现
((global, factory) => {
    //如果 当前的上下文有define函数，并且AMD  说明处于AMD 环境下
    if (typeof define === 'function' && define.amd) {
        define(["moduleA"], factory);
    }
    else if (typeof exports === 'object') {//commonjs
        let moduleA = require("moduleA")
        modules.exports = factory(moduleA)
    }
    else {
        global.moduleA = factory(global.moduleA) //直接挂载成 windows 全局变量 
    }
})(this, (moduleA) => {
    //本模块的定义
    return {
    }
})
```

# 3. Object.defineProperty 与 Proxy 实现的数据响应区别
