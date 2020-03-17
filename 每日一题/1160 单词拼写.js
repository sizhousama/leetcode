// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
// 注意：每次拼写时，chars 中的每个字母都只能用一次。
// 返回词汇表 words 中你掌握的所有单词的 长度之和。
// 示例：
// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释： 
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6

var countCharacters = function(words,chars){
    let ans = ""
    words.forEach(o=>{
        let arr = o.split('')
        let str = chars
        while(arr.length>0){
            let head = arr[0]
            if(str.indexOf(head)!=-1){
                arr.shift()
                str.replace(head,'')
                continue
            }else{
                break
            }
        }
        if(arr.length===0){
            ans += o
        }
    })
    // console.log(ans.length)
    return ans.length
}

let words = ["hello","world","leetcode"]
let chars = "welldonehoneyr"
countCharacters(words,chars)