//判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 示例 1:
// 输入: 121
// 输出: true
// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

var isPalindrome = function (x) {
    //return x.toString() === x.toString().split('').reverse().join('')
    if(x<0) return false
    x = x.toString()
    let i = 0 , j = x.length -1
    let flag = true
    while(i<j){
        if(x[i] !== x[j]){
            flag = false
            break
        }
        i++
        j--
    }
    return flag
};
