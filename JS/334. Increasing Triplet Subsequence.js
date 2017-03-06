/**
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    if(nums.length < 3){
        return false;
    }
    
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; i++){
        
        if(nums[i] <= min){
            min = nums[i];
        } else if (nums[i] <= secondMin){
            secondMin = nums[i];
        } else {
            return true;
        }
    }
    
    return false;
    
};
