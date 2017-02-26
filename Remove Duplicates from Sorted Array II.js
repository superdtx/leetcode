/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i;
    var len = nums.length;
    
    for(i = 2; i<len && i < nums.length;){
        if(nums[i-2]===nums[i-1] && nums[i-1]===nums[i]){
            nums.splice(i-2, 1);
        } else {
            i += 1;
        }
    }
    
    return nums.length;
};
