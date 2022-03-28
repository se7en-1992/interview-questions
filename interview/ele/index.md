1. 用户在浏览器中输入url发生了什么？

2. V8引擎

3. CSS哪有操作会触发GPU

4. 浏览器遇到异步脚本时会怎样处理

5. 合并重绘问题

下面两段代码哪个性能更好，为什么？

```js
1 + 1 = 2;
document.getElementsByTagName('body')[0].style.color = '#000'
document.getElementsByTagName('body')[0].style.background = '#000'
```

```js
document.getElementsByTagName('body')[0].style.color = '#000'
1 + 1 = 2;
document.getElementsByTagName('body')[0].style.background = '#000'
```

6. 如何形成合成层

7. css will-change属性

8. 性能优化做过哪些

9. webpack怎么处理模块加载

10. 小程序中的分包

11. setTimeout第二个参数为0和不填有什么区别


