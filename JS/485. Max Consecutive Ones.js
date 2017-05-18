/**
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    var zeroIndices = nums.reduce(function(accum, val, index){
        if(val === 0){
            accum.push(index);
        }
        return accum;
    }, []);
    
    if(!zeroIndices.length){
        return nums.length;
    }
    
    var max = zeroIndices[0] - 0;
    for(var i = 1; i < zeroIndices.length; i++){
        max = Math.max(max, zeroIndices[i]-zeroIndices[i-1]-1);
    }
    
    max = Math.max(max, nums.length-zeroIndices[zeroIndices.length-1]-1);
    
    return max;
};
