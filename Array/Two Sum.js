/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var numsHashmap = {};

    for (var i = 0; i < nums.length; i++) {
        var neededValue = target - nums[i];
        if(numsHashmap[neededValue] !== undefined) {
            result.push(Math.min(numsHashmap[neededValue], i));
            result.push(Math.max(numsHashmap[neededValue], i));
        } else {
            numsHashmap[nums[i]] = i;
        }
    }
    
    return result;
    
};
