/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var len = s.length;
    var hasFound = new Array(len+1);
    hasFound.fill(false);
    var i, j;
    
    hasFound[0] = true;
    
    for(i = 1; i <= len; i++){
        for(j = 0; j < i; j++){
            if(hasFound[j] && wordDict.has(s.substring(j, i))){
                hasFound[i] = true;
                break;
            }
        }
    }
    
    return hasFound[len];
};
