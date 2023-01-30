// // marvel#1047 格式化数字 1234567890 为字符串 '1,234,567,890'

// function formatNumber(number) {
//   const newArr = [];
//   let flag = 0;
//   const arr = number.toString().split('');
//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (flag === 3) {
//         newArr.push(',', arr[i]);
//         flag = 0;
//     } else {
//         newArr.push(arr[i]);
//     }
//     flag++;
//   }
//   return newArr.reverse().join('');
// }

// const result = formatNumber(1234567890);

// const format = num => {
//     const str = num.toString();
//     let ret = [];
//     let i = str.length % 3;
//     if (i) {
//         ret.push(str.slice(0, i));
//     }
//     for (;i < str.length; i = i + 3) {
//       ret.push(str.slice(i, i + 3));
//     }
//     return ret.join(',');
// };

// marvel#1047 格式化数字 1234567890 为字符串 '1,234,567,890'

const marvelNumber = function(number) {
  const str = number.toString();
  const arr = [];
  let i = str.length % 3;
  if (i) {
      arr.push(str.substring(0, i));
  }
  for (;i < str.length; i = i + 3) {
    arr.push(str.substring(i, i + 3));
  }
  return arr.join(',');
}

const formatNumber = marvelNumber(1234567890);
console.log(formatNumber);