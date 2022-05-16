// 根据完全二叉树的特性，可以得到如下特性：

// 数组零坐标代码的是堆顶元素
// 一个节点的父亲节点的坐标等于其坐标除以2整数部分
// 一个节点的左节点等于其本身节点坐标 * 2 + 1
// 一个节点的右节点等于其本身节点坐标 * 2 + 2

class MinHeap {
    constructor() {
      // 存储堆元素
      this.heap = []
    }
    // 获取父元素坐标
    getParentIndex(i) {
      return (i - 1) >> 1
    }
  
    // 获取左节点元素坐标
    getLeftIndex(i) {
      return i * 2 + 1
    }
  
   // 获取右节点元素坐标
    getRightIndex(i) {
      return i * 2 + 2
    }
  
    // 交换元素
    swap(i1, i2) {
      const temp = this.heap[i1]
      this.heap[i1] = this.heap[i2]
      this.heap[i2] = temp
    }
  
    // 查看堆顶元素
    peek() {
      return this.heap[0]
    }
  
    // 获取堆元素的大小
    size() {
      return this.heap.length
    }

    // 插入元素
    insert(value) {
        this.heap.push(value)
        this.shifUp(this.heap.length - 1)
    }
  
    // 上移操作
    shiftUp(index) {
        if (index === 0) { return }
        const parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    // 删除元素
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    
    // 下移操作
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
  }