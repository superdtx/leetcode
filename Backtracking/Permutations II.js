/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [];
    var len = nums.length;
    var isVisited = [];
    
    nums.sort(function(a, b){
       return a - b; 
    });
    
    helper(nums, len, isVisited, [], result);
    
    return result;
};

function helper(nums, len, isVisited, curArr, result) {
    if(curArr.length === len){
        result.push(curArr);
        return;
    }
    
    for(var i = 0; i < len; i++){
        if (isVisited[i] || (i > 0 && nums[i] === nums[i - 1] && !isVisited[i - 1])) {
            continue;
        }
        
        isVisited[i] = true;
        curArr.push(nums[i]);
        helper(nums, len, isVisited, curArr.concat(), result);
        isVisited[i] = false;
        curArr.pop();
    }
}
