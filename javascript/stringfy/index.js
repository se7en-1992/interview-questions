const stringfy = (obj) => {
  if (typeof obj === 'function' || !obj) return;
  if (typeof obj !== 'object') return String(obj);
  let result  = '{';
  for (const key in obj) {
    result+=`${key}: ${stringfy(obj[key])},`
  }
  result+='}';
  return result;
}

console.log(stringfy({a: 1, b: function() {console.log(1)}}))