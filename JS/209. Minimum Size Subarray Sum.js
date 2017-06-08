/**
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
**/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    var len = nums.length;
    
    if(len === 0){
        return 0;
    }
    
    var lp = 0,
        rp = 0,
        sum = 0,
        min = len+1;
        
    while(rp < len){
        while(sum < s && rp < len){
            sum += nums[rp];
            rp++;
        }
        
        while(sum >= s){
            min = Math.min(min, rp - lp);
            sum -= nums[lp];
            lp++;
        }
    }
    
    return min === len + 1 ? 0 : min;
};
