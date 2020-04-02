// 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
// 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
// 示例 1:
// 输入: [3,2,3]
// 输出: [3]
// 示例 2:
// 输入: [1,1,1,3,3,2,2,2]
// 输出: [1,2]

var majorityElement = function (nums) {
    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let cnt = 0
    let arr = []
    nums.forEach(o => {
        if ((cx == 0 || o == x) && o != y) {
            ++cx
            x = o
        } else if (cy == 0 || o == y) {
            ++cy
            y = o
        } else {
            --cx
            --cy
        }
    })
    nums.forEach(o => {
        if (x == o) {
            ++cnt
        }
    })
    if (cnt > nums.length / 3) {
        arr.push(x)
    }
    cnt = 0
    nums.forEach(o => {
        if (y == o) {
            ++cnt
        }
    })
    if (cnt > nums.length / 3 && x != y) {
        arr.push(y)
    }
    return arr
};