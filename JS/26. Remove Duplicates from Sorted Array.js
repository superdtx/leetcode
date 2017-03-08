/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

Show Company Tags
Show Tags
Show Similar Problems

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length) {
        var j = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[j]) {
                nums[j+1] = nums[i];
                j++;
            }
        }
        nums = nums.slice(0, j+1);
        return j+1;
    } else {
        return 0;
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2){
        return nums.length;
    }
    
    var i = 1;
    var j = 0;
    
    while(i < nums.length){
        if(nums[i] === nums[j]){
            i++;
        } else {
            j++;
            nums[j] = nums[i];
            i++;
        }
    }
    return j+1;
};
