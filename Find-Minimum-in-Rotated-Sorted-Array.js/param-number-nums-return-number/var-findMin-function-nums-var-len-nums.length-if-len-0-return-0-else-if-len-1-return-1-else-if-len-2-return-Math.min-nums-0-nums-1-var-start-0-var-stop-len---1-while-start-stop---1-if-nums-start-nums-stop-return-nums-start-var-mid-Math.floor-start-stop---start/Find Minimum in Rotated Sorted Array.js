/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    var len = nums.length;
    
    if (len === 0) {
        return 0;
    } else if (len === 1) {
        return 1;
    } else if(len === 2) {
        return Math.min(nums[0], nums[1]);
    }
    
    var start = 0;
    var stop = len - 1;
    
    while(start < stop - 1) {
        if (nums[start]<nums[stop]) {
            return nums[start];
        }
        
        var mid = Math.floor(start + (stop - start)/2);
        console.log(mid);
        if(nums[mid] > nums[start]) {
            start = mid;
        } else if (nums[mid] < nums[start]) {
            stop = mid;
        }
    }
    
    return Math.min(nums[start], nums[stop]);
    
};
