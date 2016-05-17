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
