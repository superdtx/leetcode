/*
Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    
    var ret = [];
    if(nums === null){
        return ret;
    }
    
    for(var i = 0; i <= nums.length; i++){
        var lt = (i === 0) ? lower : nums[i-1]+1;
        var gt = (i === nums.length) ? upper : nums[i] - 1;
        addRange(ret, lt, gt);
    }
    
    return ret;
};

function addRange(ret, lo, hi){
    if(lo > hi){
        return;
    } else if ( lo === hi){
        ret.push(lo.toString());
    } else {
        ret.push(lo + '->' + hi);
    }
}
