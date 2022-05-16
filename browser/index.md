# 浏览器合成层

1. 当DOM树构建成Render树后 会生成LayoutObject，基于同层级的LayoutObject会生成RenderLayers（渲染层）
2. 在生成RenderLayers（渲染层）的过程中某些特殊的RenderLayers（渲染层）会形成合成层，会单独拥有一个GraphicsLayer（图形层）
3. GraphicsLaye（图形层）作为纹理(从主存储器(例如 RAM)移动到图像存储器(例如 GPU 中的 VRAM)的位图图像(bitmapimage))上传给GPU的。

- 如何变成合成层
    - will-change、filters、transform、opacity等
    - 3D 或透视变换(perspective transform) CSS 属性
    - 使用加速视频解码的 <video> 元素 拥有 3D
    - (WebGL) 上下文或加速的 2D 上下文的 <canvas> 元素
    - 混合插件(如 Flash)
    - 对自己的 opacity 做 CSS动画或使用一个动画变换的元素
    - 拥有加速 CSS 过滤器的元素
    - 元素有一个包含复合层的后代节点(换句话说，就是一个元素拥有一个子元素，该子元素在自己的层里)
    - 元素有一个z-index较低且包含一个复合层的兄弟元素(换句话说就是该元素在复合层上面渲染)

# 浏览器跨域
1. 同源策略导致浏览器跨域
2. cors跨域原理  发送预请求`options`请求，服务端返回`allow-orgin`, `allow-methods`等字段
3. cors的简单请求不会发送预请求`options`请求，复杂请求才会发送预请求

# 浏览器渲染进程

构建DOM树 => 
                合并构建render树 => layout => paint => Compositing
构建CSSOM树 => 

1. 遇到无`aysnc`和`defer`的`script`浏览器会阻塞html渲染
2. 预加载扫描器优先级

- GUI渲染线程

负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行。

- JS引擎线程

也称为JS内核，负责解析Javascript脚本，运行代码。（例如V8引擎）

JS引擎一直等待着任务队列中任务的到来，然后加以处理，一个渲染进程中无论什么时候都有一个JS线程在运行JS程序。

需要注意的是：
GUI渲染线程与JS引擎线程是相互排斥的。因为JS引擎线程在执行的过程中可能会发生回流和重绘，所以GUI渲染线程执行时候，JS引擎线程会被挂起，等待GUI渲染线程执行完毕之后。同理，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存起来等到JS引擎空闲时立即被执行。所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染阻塞


# 浏览器缓存

- 强缓存

根据请求头的expires和cache-control判断是否命中强缓存

- 协商缓存

# preload和prefetch的区别



# 现代浏览器的线程架构
1. 浏览器主线程

负责界面显示、用户交互、子进程管理，同时提供存储等功能。

2. 渲染线程

核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页。
排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中。
默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。
出于安全考虑，渲染进程都是运行在沙箱模式下，无法访问系统资源。

3. GPU线程

Chrome 刚开始发布的时候是没有 GPU 进程的。
GPU 的使用初衷是为了实现 3D CSS 的效果。
随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。
最后，Chrome 在其多进程架构上也引入了 GPU 进程

4. 网络线程

主要负责页面的网络资源加载。
之前是作为一个模块运行在浏览器主进程里面的，直至最近才独立出来，成为一个单独的进程。

5. 插件线程

主要是负责插件的运行。
因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。
