/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var map = [];
    var i;
    
    for(i = 0; i < m; i++) {
        map.push([]);
    }
    
    for(i = 0; i < n; i++) {
        map[0][i] = 1;
    }
    
    for(i = 0; i < m; i++) {
        map[i][0] = 1;
    }
    
    for(i = 1; i < m; i++) {
        for(j = 1; j < n; j++){
            map[i][j] = map[i-1][j]+map[i][j-1];
        }
    }
    
    return map[m-1][n-1];
};
