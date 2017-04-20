/**
  Implement strStr().
  Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    var i, j;
    
    for(i = 0; i < haystack.length - needle.length + 1; i++){
        for(j = 0; j < needle.length; j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }
        if(j === needle.length){
            return i;
        }
    }
    
    return -1;
};
