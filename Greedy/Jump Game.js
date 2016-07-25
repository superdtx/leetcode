/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length;
    var i;
    var location = 0;

    for(i = 0; i < len; i++){
        if(location >= i){
            location = Math.max(location, nums[i]+i);
            if(location >= len - 1){
                return true;
            }
        } else {
            return false;
        }
    }
};
