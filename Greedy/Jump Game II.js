/**
 * @param {number[]} nums
 * @return {number}
 */
 
/**
 * cur是当前能达到的最远点
 * 在cur的范围内迭代计算next 然后更新步数 并将最大next设置为p
 */
var jump = function(nums) {
    var step = 0;
    var cur = 0;
    var next = 0;
    var len = nums.length;
    
    var i = 0;
    
    while(i < len){
        if(cur>=len-1){
            break;
        }
        
        while(i <= cur){
            next = Math.max(i+nums[i], next);
            i++;
        }
        step++;
        cur = next;
    }
    return step;
};
