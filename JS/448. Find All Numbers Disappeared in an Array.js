／**
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
Show Company Tags
Show Tags
Show Similar Problems

**／

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    var ret = [];
    var len = nums.length;
    
    for(let i = 0; i < len; i++){
        let m = Math.abs(nums[i]) - 1;
        nums[m] = nums[m] > 0 ? -nums[m] : nums[m];
    }

    for(let i = 0; i < len; i++){
        nums[i] > 0 && ret.push(i+1);
    }
    
    return ret;
};
