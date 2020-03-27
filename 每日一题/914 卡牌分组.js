// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
// 示例 1：
// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
// 示例 2：
// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。


var hasGroupsSizeX = function(deck) {
    let gcd = function(n1,n2){
        return n2===0?n1:gcd(n1,n1%n2)
    }
    let newmap = new Map()
    deck.forEach(o => {
        newmap.set(o,newmap.has(o)?newmap.get(o)+1:1)
    });

    let arr = [...newmap.values()]

    let g=arr[0]

    arr.forEach(o=>{
        g = gcd(g,o)
    })

    return g>=2
};