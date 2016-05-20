/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    var result;
    var head, tail;
    var minDiff = Number.MAX_VALUE;

    nums.sort(function(a, b){
        return a - b;
    });
    
    for (var i = 0; i < nums.length; i++){
        head = i+1;
        tail = nums.length-1;
        
        while(head < tail) {
            var diff = target - nums[i] - nums[head] - nums[tail];
            
            if(diff===0){
                console.log('come here');
                return target;
            } else if (diff > 0){
                head++;
            } else {
                tail--;
            }
            
            if (Math.abs(diff) < Math.abs(minDiff)) {
                minDiff = diff;
            }
        }
    }
    
    return target - minDiff;
};
