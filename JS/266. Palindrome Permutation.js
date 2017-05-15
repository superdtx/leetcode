/**
Given a string, determine if a permutation of the string could form a palindrome.

For example,
"code" -> False, "aab" -> True, "carerac" -> True.
**/

//basic way
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var hash = {};
    var midPoint = 0;
    
    for(var i = 0; i < s.length; i++){
        if(hash[s[i]] === undefined){
            hash[s[i]] = 0;
        }
        hash[s[i]]++;
    }
    
    Object.keys(hash).forEach(function(val){
       if(hash[val]&1){
           midPoint++;
       } 
    });
    
    if((midPoint === 1 && s.length&1) || (midPoint === 0 && s.length^1)){
        return true;
    } 
    
    return false;
};
