// 在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。大写字符表示白棋，小写字符表示黑棋。
// 车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。
// 另外，车不能与其他友方（白色）象进入同一个方格。
// 返回车能够在一次移动中捕获到的卒的数量。

var numRookCaptures = function(board){
    let c =0 ,s=0,e=0
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    for(let i = 0 ;i<8;i++){
        for(let j = 0;j<8;j++){
            if(board[i][j]=='R'){
                s=i
                e=j
                break
            }
        }
    }
    for(let i =0;i<4;i++){
        for(let step=0;;step++){
            let fx = s + step*dx[i]
            let fy = e + step*dy[i]
            if(fx<0||fx>=8||fy<0||fy>=8||board[fx][fy]=='B') break
            if(board[fx][fy]=='p'){
                c++
                break
            }
        }
    }
    return c
}