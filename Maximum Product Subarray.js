/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    var len = nums.length;
    if(len === 0){
        return 0;
    }
    
    var curMax = nums[0];
    var curMin = nums[0];
    var result = nums[0];
    var temp;

    for(i = 1; i < len; i++){
        temp = curMax;
        curMax = Math.max(temp*nums[i], curMin*nums[i], nums[i]);
        curMin = Math.min(temp*nums[i], curMin*nums[i], nums[i]);
        
        result = Math.max(curMax, result);
    }
    
    return result;
};
