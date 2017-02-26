/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    var m = grid[0].length;
    var n = grid.length;
    var map = [];
    var i, j;
    
    for(i = 0; i < n; i++){
        map.push([]);
    }
    
    map[0][0]=grid[0][0];
    
    for(i = 1; i < m; i++){
        map[0][i] = map[0][i-1] + grid[0][i];
    }
    
    for(i = 1; i < n; i++){
        map[i][0] = map[i-1][0] + grid[i][0];
    }
    
    for(i = 1; i < n; i++){
        for(j = 1; j < m; j++){
            map[i][j] = Math.min(map[i-1][j], map[i][j-1]) + grid[i][j];
        }
    }
    
    return map[n-1][m-1];
};
