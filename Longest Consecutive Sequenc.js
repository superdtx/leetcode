/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var len = nums.length;
    if(len === 0){
        return 0;
    }
    
    var localMax = 1;
    var max = 1;
    
    nums.sort(function(a, b){return a-b;}).reduce(function(prev, curr){ 
    	if((curr - prev) === 1){
    		localMax += 1;
    	} else if((curr - prev) === 0){
    	    return curr;
    	} else {
    		max = Math.max(max, localMax);
    		localMax = 1;
    	}
    	return curr;
    });
    
    max = Math.max(max, localMax);
    return max;
};
