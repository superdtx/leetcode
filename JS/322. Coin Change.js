/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var max = amount+1;
    var dp = new Array(amount+1).fill(max);
    
    dp[0] = 0;
    
    for(var i = 1; i <= amount; i++){
        for(var j = 0; j < coins.length; j++){
            if(coins[j] <= i){
                dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
};
