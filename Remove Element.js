/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums.length)
        return 0;

    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    console.log(j)
    nums = nums.slice(0, j);
    return j;
};
