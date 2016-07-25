/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length;
    var i;
    var cover = nums[0];

    for(i = 1; i < len; i++){
        cover--;
        if(cover < 0){
            return false;
        }
        
        cover = Math.max(cover, nums[i]);
    }
    
    return true;
};
