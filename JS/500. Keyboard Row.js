/**
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
**/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var rows = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m']];
    var res = [];
    
    for(var i = 0; i < words.length; i++){
        if(inOneRow(words[i], rows)){
            res.push(words[i]);
        }
    }
    
    return res;
};

var inOneRow = function(word, rows){
    var i;
    var wordinLow = word.toLowerCase();
    for(i = 0; i < rows.length; i++){
        if(rows[i].indexOf(wordinLow[0]) !== -1){
            break;
        }
    }
    
    for(var j = 0; j < wordinLow.length; j++){
        if(rows[i].indexOf(wordinLow[j]) === -1){
            return false;
        }
    }
    return true;
};



/**
regex
**/

var findWords = function(words) {
    return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};
