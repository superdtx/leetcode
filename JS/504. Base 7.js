/**
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
**/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0){
        return '0';
    }
    
    var isMinus = false;
    
    if(num < 0){
        isMinus = true;
        num = -num;
    }
    
    var ret = [];
    
    while(num > 0){
        ret.push(num%7 +'');
        num = Math.floor(num / 7);
    }
    
    return isMinus? '-' + ret.reverse().join('') : ret.reverse().join('');
};
