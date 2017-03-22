/**
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.
**/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
    var ret = '';
    
    nums.sort(function(s1, s2){
        var s12 = s1.toString() + s2.toString();
        var s21 = s2.toString() + s1.toString();
        
        return parseInt(s21) - parseInt(s12);
    });
    
    for(var i = 0; i < nums.length; i++){
        if(ret !== '0' || nums[i]) {
            ret += nums[i];
        }
    }
    
    return ret;
};
