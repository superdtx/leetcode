/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    var result = [];
    
    if(nums.length<3){
        return result;
    }
    
    nums.sort(function(a, b){
        return a - b;
    });
    
    var i = 0;
    while(i < nums.length){
        if(nums[i] !== nums[i-1]){
            var target = 0 - nums[i];
            var twoSumResult = twoSum(nums, target, i);
            result = result.concat(twoSumResult);   
        }
        i++;
    }
    return result;
};

var twoSum = function(nums, target, startIndex) {
    var allResult = [];
    var currentResult;
    var head = startIndex + 1;
    var tail = nums.length - 1;
    
    while(head < tail){
        var tmp = nums[head] + nums[tail];
    
        if(tmp === target){
            currentResult = [-target, nums[head], nums[tail]];
            allResult.push(currentResult);
            head ++;
            tail --;
           
           while (nums[head] === nums[head - 1]) {
               head++;
           }
           
           while (nums[tail] === nums[tail + 1]) {
               tail--;
           }
        } else if(tmp > target) {
            tail--;
        } else {
            head++;
        }
    }
    
    return allResult;
}
