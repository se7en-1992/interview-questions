// 节流
// 在N秒内函数只执行一次，并且在N秒内再次触发，不会重新计时

function throttled(fn, delay) {
    let timer = null;
    let starttime = Date.now();
    return function() {
        let curTime = Date.now();
        let remaining = delay - (curTime - starttime);
        let context = this;
        let args = arguments;
        if (remaining <= 0 ) {
            fn.apply(context, args);
            starttime = Date.now();
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}

// 防抖
// 在N秒后函数只执行一次，并且在N秒内再次触发，按最后一次触发时间重新计时

function debounce(func, wait, immediate) {
    let timeout;
     return function() {
         let context = this;
         let args = arguments;
         if (timeout) clearTimeout(timeout);
         if (immediate) {
             let callNow = !timeout;
             timeout = setTimeout(function() {
                 timeout = null;
             }, wait);
             if (callNow) {
                func.apply(context, args);
             } 
         } else {
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
         }
     }
}