/**
 * @param {number} n
 * @return {number}
 */
/**
 * dp[i] += dp[j]*dp[i-j-1]
 */
var numTrees = function(n) {
    
    var dp = [];
    
    dp[0] = 1;
    dp[1] = 1;
    
    
    
    for(var i = 2; i <= n; i++){
        dp[i] = 0;
        for(var j = 0; j < i; j++){
            dp[i] += dp[j]*dp[i-j-1];
        }
    }
    return dp[n];
};
