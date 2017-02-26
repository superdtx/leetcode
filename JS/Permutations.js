/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var result = [];
    var len = nums.length;
    
    helper(nums, 0, len, [], [], result);
    
    return result;
};

function helper(nums, start, len, curArr, isVisited, result){
    
    if(curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    for(var i = 0; i < len; i++){
        if(isVisited[i]){
            continue;
        }
            
        curArr.push(nums[i]);
        isVisited[i]=true;
        helper(nums, i+1, len, curArr.concat(), isVisited, result);
        isVisited[i]=false;
        curArr.pop();
    }
    
}
