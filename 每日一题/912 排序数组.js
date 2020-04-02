// 给你一个整数数组 nums，将该数组升序排列。
// 示例 1：
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2
// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]

var sortArray = function(nums) {
    if(nums.length<=1){
        return nums
    }
    let pidx = Math.floor(nums.length/2)
    let p=nums.splice(pidx,1)[0]
    let left =[]
    let right=[]
    nums.forEach(o=>{
        if(o>p){
            right.push(o)
        }else{
            left.push(o)
        }
    })
    return sortArray(left).concat(p,sortArray(right))
};