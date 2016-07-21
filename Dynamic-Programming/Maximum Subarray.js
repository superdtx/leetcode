/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    var sum = 0;
    var m = Number.NEGATIVE_INFINITY;
    
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        m = Math.max(m, sum);

        if(sum<0){
            sum = 0;
        }
    }
    
    return m;
};
