/**
  Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.
  Example 1:
  Given words = ["bat", "tab", "cat"]
  Return [[0, 1], [1, 0]]
  The palindromes are ["battab", "tabbat"]
  Example 2:
  Given words = ["abcd", "dcba", "lls", "s", "sssll"]
  Return [[0, 1], [1, 0], [3, 2], [2, 4]]
  The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
  */


//Time Limit Exceeded
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    
    let res = [];
    let len = words.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(isPalindrome(words[i]+words[j]) && i !== j) {
                res.push([i, j]);
            }
        }
    }
    
    return res;
};

function isPalindrome(s){
    let len = s.length;
    for(let i = 0; i < Math.floor(len/2); i++){
        if(s[i] !== s[len - 1 - i]){
            return false;
        }
    }
    
    return true;
}
