/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    for(var i = 0; i < ransomNote.length; i++){
        var cha = ransomNote.charAt(i);
        var indx = magazine.indexOf(cha);
        if(indx < 0){
            return false;
        }
            
        magazine = magazine.substr(0, indx) + magazine.substr(indx+1, magazine.length);
    }
    
    return true;
};
