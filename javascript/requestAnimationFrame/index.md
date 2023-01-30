### requestAnimationFrame 有什么用？

答案：可以用 requestAnimationFrame 优化网页性能，提升用户体验。浏览器的页面渲染和 js 引擎共用一个线程，导致在执行 js 时，网页的渲染会停止。在 60Hz 刷新率情况下，浏览器保持每秒 60 次的刷新频率，也就是大约 16 毫秒渲染一次；但是如果某段 js 脚本逻辑比较复杂，执行时间超过了 16 毫秒，那么期间如果 dom 发生了改变，浏览器就无法立即重绘，视觉上就会产生页面卡顿的感觉。解决方案是，可以将一段执行时间较长的 js 逻辑拆解成若干个小逻辑，放置在 requestAnimationFrame 的回调中。那么浏览器会在帧刷新前执行对应的回调。

相比 setTimeout，requestAnimationFrame 还有一个额外的优势。当页面处于非当前 tab 时，requestAnimationFrame 的回调函数不会被执行。

候选人一般解释不了那么详细。也可以直接上题目。在网页中插入 10000 个 `<div>hello world</div>`节点，使用 requestAnimationFrame 保证插入期间页面不卡顿

```js
let c = 1e4

const run = () => {
  c -= 100;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 100; ++i) {
    const div = document.createElement('div');
    div.textContent = 'hello world';
    frag.appendChild(div);
  }
  document.body.appendChild(frag);
  if (c > 0) {
    requestAnimationFrame(run)
  }
}

run();
```