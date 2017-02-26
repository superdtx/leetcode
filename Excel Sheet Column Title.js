/**
 Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
 */
 
 /**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    
    let title = '';
    
    while(n > 0){
        title = String.fromCharCode((n-1)%26 + 65) + title;
        n = Math.floor((n-1)/26);
    }    
    
    return title;
};
