/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
**/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var len = s.length;
    var sarr = s.split(' ');
    
    var reverseWord = function(word){
        var wordArray = word.split('');
        for(var i = 0; i < Math.floor(word.length/2); i++){
            var tmp = wordArray[i];
            wordArray.splice(i, 1, wordArray[wordArray.length - 1 - i]);
            wordArray.splice(wordArray.length-1-i, 1, tmp);
        }
        return wordArray.join('');
    };
    
    for(var i = 0; i < sarr.length; i++){
        sarr.splice(i, 1, reverseWord(sarr[i]));
    }
    
    return sarr.join(' ');
};
