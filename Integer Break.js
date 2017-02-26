/**
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.

Hint:

There is a simple O(n) solution to this problem.
You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
 */

/**
num －> dp[num]
0 －> 0
1 －> 1
2 －> 1
3 －> 2
4 －> 4
5 －> 6
乘数可以是 数字 或者 数字组合 谁大就用谁
for 8: max(dp[3], 3)*max(dp[5], 5) --> 3*dp[5] --> 3*2*3
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for(var i = 2; i <= n; i++){
        for(var j = 1; 2*j <= i; j++){
            dp[i] = Math.max( dp[i], Math.max(j, dp[j])*Math.max(i-j, dp[i-j]) );
        }
    }

    return dp[n];
};
