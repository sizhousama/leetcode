// 在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。
// 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
// 请你返回最终形体的表面积。
// 示例 1：
// 输入：[[2]]
// 输出：10
// 示例 2：
// 输入：[[1,2],[3,4]]
// 输出：34

var surfaceArea = function(grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j]) {
        continue;
      }
      ans += 2 + 4 * grid[i][j];

      if (i - 1 >= 0) {
        ans -= Math.min(grid[i][j], grid[i - 1][j]);
      }
      if (j - 1 >= 0) {
        ans -= Math.min(grid[i][j], grid[i][j - 1]);
      }
      if (i + 1 < grid.length) {
        ans -= Math.min(grid[i][j], grid[i + 1][j]);
      }
      if (j + 1 < grid.length) {
        ans -= Math.min(grid[i][j], grid[i][j + 1]);
      }
    }
  }
  return ans;
};
