/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

//https://discuss.leetcode.com/topic/14597/solution-explained
//O(N lg N) running time + O(1) memory
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var len = nums.length;
    nums.sort(function(a, b){
        return a - b;
    });
    return nums[len - k];
};

