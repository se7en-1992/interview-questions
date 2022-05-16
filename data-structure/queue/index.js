// 队列 先进先出

class taskQueue {
    constructor(size) {
        this.saveQueue = [];
        this.callQueue = [];
        this.size = size;
    }

    add(item) {
        return new Promise(resolve => {
            this.saveQueue.push({ fn: item, resolve, state: 0 });
            this.runTask()
        })
    }

    runTask() {
        if (this.callQueue.length < this.size && this.saveQueue.length > 0) {
            this.callQueue.push(this.saveQueue[0])
            this.saveQueue.shift();
            this.callQueue.forEach((item, index) => {
                if (item.state === 0) {
                    item.state = 1;
                    item.fn().then(() => {
                        item.resolve();
                        this.callQueue.splice(index, 1)
                        this.runTask()
                    })
                }
            })
        }
    }
}

const task = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
const tasks = new taskQueue(2);
const addTask = (order, time) => {
    tasks.add(() => task(time)).then(() => {
        console.log(order)
    })
}

addTask('1', '1000')
addTask('2', '500')
addTask('3', '300')
addTask('4', '400')