/**
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length;
    var uniqCharHash = {};
    var uniqCharArray = [];
    
    for(let i = 0; i < len; i++){
        if(typeof uniqCharHash[s[i]] === 'undefined'){
            uniqCharHash[s[i]] = 0;
            uniqCharArray.push(s[i]);
        } else {
            uniqCharArray.indexOf(s[i]) >= 0 && uniqCharArray.splice(uniqCharArray.indexOf(s[i]), 1);
        } 
    }

    return s.indexOf(uniqCharArray[0]);
};
