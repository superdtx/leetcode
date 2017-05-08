/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4.
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    return nums.sort(function(a,b){
        return a - b;
    }).reduce(function(sum, val, index){
        if(index%2 === 0){
            sum += val;
        }
        return sum;
    }, 0);
};


/*
The largest element will never be able to be a part of the sum because only min(Ai, Bi) is included. So, if we club the largest element with the 2nd largest element, then the 2nd largest element is guaranteed inclusion. Using the same thought process for all the other elements, this solution works.
**/
