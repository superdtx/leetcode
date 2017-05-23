/**
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
**/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let ret = [];
    
    for(let i = 0; i < nums.length; i++){
        let m = Math.abs(nums[i]) - 1;
        if(nums[m] < 0){
            ret.push(Math.abs(nums[i]));
        }
        nums[m] = -nums[m];
    }
    
    return ret;
};
