// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
// 注意:
// 假设字符串的长度不会超过 1010。
// 示例 1:
// 输入: "abccccdd"
// 输出:7
// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

var longestPalindrome = function(s) {
  let arr = s.split("");
  let ans = 0;
  let temp = {};
  arr.forEach(o => {
    if (temp[o]) {
      ans += 2;
      temp[o] = undefined;
    } else {
      temp[o] = 1;
    }
  });
  if (Object.keys(temp).some(k => temp[k] === 1)) {
    ans += 1;
  }
  return ans;
//   console.log(ans)
};
let s = 'abbccddsaaa'
longestPalindrome(s)


// 解题思路：遍历字符串，出现偶数次的字符使数量加2，如果有出现奇数次的字符，ans+1，全局只计算一次