function throttled(fn, wait) {
  let timer = null;
  let starttime = Date.now();

  return function() {
    const args = [...arguments];
    const context = this;
    const curTime = Date.now();
    const remainTime = wait - (curTime - starttime);
    if (remainTime <= 0) {
      fn.apply(context, args);
      starttime = Date.now();
    } else {
      timer = setTimeout(fn, wait);
    }
  }
}

function debounce(fn, wait, imediate) {
  let timer = null;

  return function() {
    const args = [...arguments];
    const context = this;
    if (timer) clearTimeout(timer);
    if (imediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  }
}

debounce(() => console.log(1), 500, true)()


function debounce (fn, wait, imediate) {
  let timer = null;

  return function() {
    const context = window || this;
    const args = [...arguments];
    if (timer) clearTimeout(timer);

    if (imediate) {
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      fn.apply(context, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  }
}