/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    var len = nums.length;
    
    var output = [];
    
    //product from left side
    output[0]= 1;
    for(var i = 1; i < len; i++){
        output[i] = output[i-1]*nums[i-1];
    }
    
    var temp = nums[len-1];
    for(var i = len-2; i > -1; i--){
        output[i] = output[i]*temp;
        temp = temp*nums[i];
    }
    
    return output;
};
