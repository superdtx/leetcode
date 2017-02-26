/*
  You are a professional robber planning to rob houses along a street. Each house has a 
  certain amount of money stashed, the only constraint stopping you from robbing each of them 
  is that adjacent houses have security system connected and it will automatically contact the 
  police if two adjacent houses were broken into on the same night.

  Given a list of non-negative integers representing the amount of money of each house, 
  determine the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    len = nums.length;
    if(len === 0){
        return 0;
    }
    
    var dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i < len; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
    }
    
    return dp[len-1];
};
