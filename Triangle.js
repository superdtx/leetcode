/**
 * @param {number[][]} triangle
 * @return {number}
 */
/** 
 * dp[m][n] = min(dp[m+1][n], dp[m+1][n+1]) + triangle[m][n]
 */
var minimumTotal = function(triangle) {
    
    var m = triangle.length;
    var dp = [];
    var i, j;
    
    for(i = 0; i < m; i++){
        dp[i] = triangle[m-1][i];
    }
    
    for(i = m-2; i >=0; i--){
        for(j = 0; j <= i; j++){
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }
    return dp[0];
};
