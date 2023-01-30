// <!--使用requestAnimationFrame 实现setInterval -->
function mySetInterval(cb, cancelCb) {
  let timer = null;
  let pre = new Date()
  let fn = function() {
    timer = requestAnimationFrame(() => {
      let cur = new Date()
      if (cur - pre >= 1000) {
        cb()
        pre = cur
      }
      timer = requestAnimationFrame(fn)
      if (cancelCb && cancelCb()) {
        timer && cancelAnimationFrame(timer)
      }
    })
  }
  fn()
}

// <!-- 倒计时 -->
class Countdown {
  constructor({ endTime }) {
    this.endTimetamp = new Date(endTime).getTime()
    console.log(endTime, this.endTimetamp);
    this.countDownDate = {}
    mySetInterval(this.countDown.bind(this), this.cancel.bind(this))
  }

  countDown() {
    let dis = (this.endTimetamp - new Date().getTime()) / 1000
    this.countDownDate = this.calculator(dis)
    console.log('发送事件---->', this.countDownDate);
    // this.on('countdown', this.countDownDate)
  }

  cancel() {
    return this.countDownDate && this.countDownDate.timetamp <= 0 ? true : false
  }
  
  calculator(second) {
    let sec = 1,
        min = 60 * sec,
        hour = 60 * min,
        day = 24 * hour;
    return {
        day: parseInt(second / day),
        hour: parseInt(second % day / hour),
        min: parseInt(second % hour / min),
        second: parseInt(second % min),
        timetamp: second
    }
  } 
}

new Countdown({
    endTime: '2023-1-7 16:23'
})
