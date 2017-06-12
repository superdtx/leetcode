/**
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
Credits:
Special thanks to @elmirap for adding this problem and creating all test cases.
**/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    if(num < 0) {
        return false;
    }
    
    let start = 1;
    let end = Math.floor(num/2);
    
    while(start + 1 < end){
        let mid = start + Math.floor((end - start)/2);
        
        if(mid*mid === num){
            return true;
        } else if(mid*mid < num){
            start = mid;
        } else {
            end = mid;
        }
    }
    
    if(start*start === num || end*end === num){
        return true;
    }
    
    return false;
};

//Other two methods are here https://leetcode.com/problems/valid-perfect-square/#/solutions
