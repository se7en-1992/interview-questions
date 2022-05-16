/*

 问题1：实现 `calc` 方法，统计各个 tag 出现的次数和对应的 name 值。
const array = [
  {name: 'articleA', tags: ['javascript', 'es6', 'css']},
  {name: 'articleB', tags: ['animation', 'transform', 'css']},
  {name: 'articleC', tags: ['javascript', 'currying']}
];

console.log(calc(array, 'javascript'));
console.log(calc(array, 'css'));

输出数据如下：
javascript: 2, [articleA, articleC]
css: 2, [articleA, articleB]

function calc(arr, str) {
    // your code here 

}

*/
function calc(arr, str) {
    var result = []
    var sum = 0;
    for(var i = 0 ; i < arr.length; i++) {
      arr[i].tags.forEach(item => {
        if(item === str) {
          sum++;
          result.push(arr[i].name)
        }
      })
    }
    return `${str}: ${sum}, [${result.toString}]`;
}



/*

 问题2：请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象
var url = "https://pd.alipay.com/#/product/productHome?catalogCode=GC&tabKey=GOC&roleType=GOC"

var paramObj = parseQueryString(url);
console.log(paramObj.catalogCode, paramObj.tabKey, paramObj.roleType);  // GC GOC GOC

function parseQueryString(url) {
    // your code here 
}

*/

function parseQueryString(url) {
    // your code here 
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}


/*

 问题3：你会有一堆面额硬币，需要给我满足总额的硬币，各种面额数量管够，有几种给法
Input: amount = 5, coins = [1,2,5]
Output: 4
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
var change = function(amount, coins) {
    // your code here 
};

*/

var change = function(amount, coins) {
    var map = new Map();
    // your code here 
    const rec = (amount, coins) =>  {
        for(var i = 0; i < coins.length; i++) {
            if (map.has(amount - coins[i])) {
                map.set(amount - coins[i], map.get(amount - coins[i])++)
            } else {
                map.set(amount - coins[i], 1)
            }
        }
    }
    rec(amount, coins)
    return
};