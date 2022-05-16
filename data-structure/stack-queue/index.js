// 线性结构有：数组、栈、队列、链表等
// 非线性结构有：树、图、堆等

class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * 添加一个（或几个）新元素到栈顶
     * @param {*} element 新元素
     */
    push(element) {
        this.items.push(element)
    }

   /**
    * 移除栈顶的元素，同时返回被移除的元素
    */
    pop() {
        return this.items.pop()
    }

    /**
     * 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
     */
    peek() {
        return this.items[this.items.length - 1]
    }

    /**
     * 如果栈里没有任何元素就返回true,否则返回false
     */
    isEmpty() {
        return this.items.length === 0
    }

    /**
     * 移除栈里的所有元素
     */
    clear() {
        this.items = []
    }

    /**
     * 返回栈里的元素个数。这个方法和数组的length属性很类似
     */
    size() {
        return this.items.length
    }
}


class Queue {
    constructor(size) {
        this.size = size; // 长度需要限制, 来达到空间的利用, 代表空间的长度
        this.list = [];
        this.font = 0; // 指向首元素
        this.rear = 0;  // 指向准备插入元素的位置
    }
    enQueue() {
        if (this.isFull() == true) {
            return false
        }
        this.rear = this.rear % this.k;
        this._data[this.rear++] = value;
        return true
    }
    deQueue() {
        if(this.isEmpty()){
            return false;
        }
        this.font++;
        this.font = this.font % this.k;
        return true;
    }
    isEmpty() {
        return this.font == this.rear - 1;
    }
    isFull() {
        return this.rear % this.k == this.font;
    }
}

// 上述通过求余的形式代表首尾指针增1 时超出了所分配的队列空