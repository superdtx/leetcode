/**
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  For example,
  "A man, a plan, a canal: Panama" is a palindrome.
  "race a car" is not a palindrome.
  Note:
  Have you consider that the string might be empty? This is a good question to ask during an interview.
  For the purpose of this problem, we define empty string as valid palindrome.
  */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    len = s.length;
    
    if(len === 0){
        return true;
    }
    
    var newS = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    len = newS.length;
    
    if(len === 0){
        return true;
    }
    
    for(var i = 0; i < Math.floor(len/2); i++){
        if(newS[i] !== newS[len - i - 1]){
            return false;
        }
    }
    
    return true;
};
