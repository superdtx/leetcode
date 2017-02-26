/**
  Compare two version numbers version1 and version2.
  If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
  You may assume that the version strings are non-empty and contain only digits and the . character.
  The . character does not represent a decimal point and is used to separate number sequences.
  For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
  Here is an example of version numbers ordering:
  0.1 < 1.1 < 1.2 < 13.37
  Credits:
  Special thanks to @ts for adding this problem and creating all test cases.
  */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1Array = version1.split('.');
    let v2Array = version2.split('.');
    let len1 = v1Array.length;
    let len2 = v2Array.length;
    var i = Math.min(len1, len2);

    while(i > 0){
        var v1Elem = parseInt(v1Array.shift());
        var v2Elem = parseInt(v2Array.shift());
        if(v1Elem > v2Elem){
            return 1;
        } else if(v1Elem < v2Elem){
            return -1;
        }
        i--;
    }
    
    if(len1 > len2){
        if(parseInt(v1Array.join('')) > 0){
            return 1;
        }
    }else if(len1 < len2){
        if(parseInt(v2Array.join('')) > 0){
            return -1;
        }
    }
    
    return 0;
};
