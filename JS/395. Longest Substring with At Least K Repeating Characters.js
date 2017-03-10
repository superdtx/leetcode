/*
Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    return helper(s, 0, s.length, k);
};

function helper(s, start, end, k){
    if(end-start < k){
        return 0;
    }
    
    var count = new Array(26).fill(0);
    
    for(var i = start; i < end; i++){
        count[s.charCodeAt(i)-97]++; 
    }
    
    for(var i = 0; i < 26; i++){
        /**
         * If this character occurs at least once, but fewer than k times
         * in this substring, we know:
         * (1) this character cannot be part of the longest valid substring,
         * (2) the current substring is not valid.
         * 
         * Hence, we will "split" this substring on this character,
         * wherever it occurs, and check the substrings formed by that split
         */
        if(count[i] < k && count[i] >0){
            
            /**
             * Look for each occurrence of this character (i + 'a')
             * in this substring.
             */
            for(var j = start; j < end; j++){
                if(s.charCodeAt(j) === (i+97)) {
                    var left = helper(s, start, j, k);
                    var right = helper(s, j+1, end, k);
                    return Math.max(left, right);
                }
            }
        }
    }
    
    return end - start;
}
