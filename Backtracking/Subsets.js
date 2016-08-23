/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    var result = [];
    var len = nums.length;
    
    helper(nums, 0, len-1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    for(var i = start; i <= end; i++){
        curArr.push(nums[i]);
        helper(nums, i+1, end, curArr.concat(), result);
        curArr.pop();
    }
}
