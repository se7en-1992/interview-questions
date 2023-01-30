var a = [1,3,4,5];
var b = [3,6,8,1];

const merge = (a, b) => {
  let i = 0;
  let j = 0;
  const ret = [];
  while (i < a.length || j < b.length) {
    if (i > a.length) {
      ret.push(b[j]);
      ++j
    }
    if (j > b.length) {
      ret.push(a[i]);
      ++i
    }
    const x = a[i];
    const y = b[j];
    if (x < y) {
      ret.push(x);
      ++i;
    } else {
      ret.push(y);
      ++j
    }
  }
  return ret;
};

const result = merge(a, b);
console.log(result);