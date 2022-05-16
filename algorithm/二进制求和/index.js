function binaryAdd(num1, num2) {
    let result = '';
    let temp = 0;
    let sum = 0;
    let minnum  = num1.length > num2.length  ? num2 : num1;
    const maxnum = num1.length > num2.length  ? num1 : num2;
    minnum = '0'.repeat(Math.abs(num1.length - num2.length)) + minnum;
    for(let i = maxnum.length - 1; i >= 0; i--) {
        sum = Number(maxnum[i]) + Number(minnum[i]) + temp;
        if (sum >= 2) {
            result = String(sum % 2) + result
            temp = 1
        } else {
            result = String(sum) + result
            temp = 0
        }
    }
    if (temp !== 0 ) {
        result = String(temp) + result;
        temp = 0
    }
    console.log(result);
    return  result
  }

  binaryAdd('1010', '1011') // '10001'