/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [];
    var len = nums.length;
    
    nums.sort(function(a, b){
        return a - b;
    });
    
    helper(nums, 0, len-1, [], result);
    return result;
};

function helper(nums, start, end, curArr, result) {
    
    result.push(curArr);
    
    for(var i = start; i <= end; i++){
        curArr.push(nums[i]);
        helper(nums, i+1, end, curArr.concat(), result);
        curArr.pop();
        
        while(i<(nums.length-1) && nums[i] === nums[i+1]){
            i++;
        }
    }
    
}
