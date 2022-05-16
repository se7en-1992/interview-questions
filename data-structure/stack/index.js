// 1. 栈  先进后出

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.size() - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }
}
