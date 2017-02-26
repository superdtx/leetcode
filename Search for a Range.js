/**
Given a sorted array of integers, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].
For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    var result = [],
        leftIndex = findLeftBoundry(nums, target),
        rightIndex = findRightBoundry(nums, target);
    
    result.push(leftIndex);    
    result.push(rightIndex);
    
    return result;

};

var findLeftBoundry = function(nums, target) {
    var i = 0;
    
    while(i < nums.length) {
        if (nums[i] === target) {
            return i;
        }
        i++;
    }
    
    return -1;
};

var findRightBoundry = function(nums, target) {
    var i = nums.length-1;
    
    while(i >= 0) {
        if (nums[i] === target) {
            return i;
        }
        i--;
    }
    
    return -1;
};
