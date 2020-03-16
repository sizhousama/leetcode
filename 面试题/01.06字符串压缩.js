// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
// 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
// 你可以假设字符串中只包含大小写英文字母（a至z）。
// ej
//  输入："aabcccccaaa"
//  输出："a2b1c5a3"

//  输入："abbccd"
//  输出："abbccd"
//  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。

var compressString = function(S){
    let arr = S.split('')
    let ans = ""
    for(let i=0,j=0;j<arr.length;j++){
        if(arr[j+1]!=arr[i]){
            ans += arr[i] + (j+1-i)
            i = j+1
        }
    }

    // str = (S.length<=ans.length)?S:ans
    // console.log(str)
    return (S.length<=ans.length)?S:ans
}
let S ='abcd'
compressString(S)


// a[i]为每个重复字母头部