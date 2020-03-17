// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。
// 示例:
// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

var subsets = function(nusm) {
  let s = [[]];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0, l = s.length; j < l; j++) {
      s.push(s[j].concat([nums[i]]));
    }
  }
  console.log(s);
  return s;
};

let nums = [1, 2, 3, 4];
subsets(nums);
