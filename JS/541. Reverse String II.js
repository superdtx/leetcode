/**
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
**/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    var iter = Math.floor(s.length / (2*k));
    var remainder = s.length % (2*k);
    var ret = '';
    
    for(var i = 1; i <= iter; i++){
        ret += swapStr(s.substr(ret.length, k));
        ret += s.substr(ret.length, k);
    }
    
    ret += swapStr(s.substr(ret.length, k));
    
    if(remainder > k) {
        remainder -= k;
    }
    
    ret += s.substr(ret.length, remainder);
    
    return ret;
};

var swapStr = function(str) {
    
    var newStr = str.length & 1 ? str[Math.floor(str.length / 2)] : '';

    for (var i = Math.floor(str.length / 2) - 1; i >= 0; i--) {
        var tmp1 = str[i];
        var tmp2 = str[str.length - i - 1];
        newStr = tmp2 + newStr + tmp1;
    }

    return newStr;
};
