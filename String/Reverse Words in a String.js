/**
  Given an input string, reverse the string word by word.
  For example,
  Given s = "the sky is blue",
  return "blue is sky the".
  */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let res = '';
    let arr = str.split(' ');
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i].length === 0){
            continue;
        }
        
        res += ' ' + arr[i];
    }
    
    return res.trim();
};
