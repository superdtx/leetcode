/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    if(obstacleGrid[0][0]===1){
        return 0;
    }
    
    var map = [];
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    var i, j;
    
    for(i = 0; i < n; i++){
        map.push([]);
    }
    
    map[0][0] = 1;
    
    for(i = 1; i < m; i++){
        map[0][i] = ((map[0][i-1]===1&&obstacleGrid[0][i]===0)?1:0);
    }
    
    for(i = 1; i < n; i++){
        map[i][0] = ((map[i-1][0]===1&&obstacleGrid[i][0]===0)?1:0);
    }
    
    for(i = 1; i < n; i++){
        for(j = 1; j < m; j++){
            if(obstacleGrid[i][j] === 1){
                map[i][j] = 0;
            } else {
                map[i][j] = map[i-1][j] + map[i][j-1];
            }
        }
    }
    
    return map[n-1][m-1];
};
