Promise.prototype.myPromiseAll = function(promises) {
  let resolveNum = 0;
  let resolveValues = [];

  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then((value) => {
        resolveNum++;
        resolveValues.push(value);
        if (resolveNum === promises.length) {
          return resolveValues;
        }
      }, (err) => {
        reject(err);
      })
    });
  });
}