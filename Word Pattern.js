/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    
    var strArray = str.split(' ');
    
    if(strArray.length !== pattern.length){
        return false;
    }
    
    var patternArray = pattern.split('');
    var i;
    var patternMap = {};
    var strMap = {};
    
    for(i = 0; i < pattern.length; i++){
        if(!patternMap[patternArray[i]]){
            patternMap[patternArray[i]] = strArray[i];
        } else if(patternMap[patternArray[i]] !== strArray[i]){
            return false;
        }
        
        if(!strMap[strArray[i]]){
            strMap[strArray[i]] = patternArray[i];
        } else if(strMap[strArray[i]] !== patternArray[i]){
            return false;
        }
    }
    
    return true;
};
