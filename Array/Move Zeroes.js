/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    var len = nums.length;
    for(var i = len - 1; i > -1; i--){
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};
