/**
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
**/


//Two Moving Targets

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let min = words.length;
    let word1pos = -1;
    let word2pos = -1;
    
    for(let i = 0; i < words.length; i++){
        
        if(words[i] === word1){
            word1pos = i;
        }
        
        if(words[i] === word2){
            word2pos = i;
        }
        
        if(word1pos !== -1 && word2pos !== -1){
            min = Math.min(min, Math.abs(word1pos - word2pos));
        }
    }
    
    return min;
};
