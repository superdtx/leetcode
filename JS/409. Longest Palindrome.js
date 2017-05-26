/**
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
**/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {};
    
    s.split('').forEach(function(elem){
        if(hash[elem] === undefined){
            hash[elem] = 0;
        }
        hash[elem]++;
    });

    let oddNum = 0;
    let evenNum = 0;
    
    Object.keys(hash).forEach(function(elem){
        evenNum += Math.floor(hash[elem]/2);
        oddNum += hash[elem]%2;
    });
    
    return !!oddNum ? evenNum*2+1 : evenNum*2;
};
