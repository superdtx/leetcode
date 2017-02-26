/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = [];
    dp[0] = 0;
    var i, j;
    for(i = 1; i <= n; i++){
        dp[i] = Number.MAX_VALUE;
    }
    
    for(i = 0; i <= n; i++){
        for(j = 1; i+j*j<=n; j++){
            dp[i+j*j] = Math.min(dp[i+j*j], dp[i]+1);
        }
    }
    
    return dp[n];
};
