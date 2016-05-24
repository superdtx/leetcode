/*
 * A peak element is an element that is greater than its neighbors.
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 * You may imagine that num[-1] = num[n] = -∞.
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 * click to show spoilers.
 * Note:
 * Your solution should be in logarithmic complexity.
*/ 
 
 /*
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    var head = 0,
        tail = nums.length,
        mid;

    if(nums.length === 0) {
        return 0;
    }
    
    while(head <= tail){
        mid = head + Math.floor((tail-head)/2);
        if(nums[mid] <= nums[mid+1]){
            head = mid + 1;
        } else if(nums[mid] <= nums[mid-1]){
            tail = mid - 1;
        } else {
            return mid;
        }
    }
    
    return head;
};
