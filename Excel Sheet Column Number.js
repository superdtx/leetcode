/**
 Given a column title as appear in an Excel sheet, return its corresponding column number.

  For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    let len = s.length;
    let base = 'A'.charCodeAt(0) - 1;
    let number = 0;
    
    for(let i = 0; i < len; i++){
        number = number*26 + (s[i].charCodeAt(0)-base);
    }
    
    return number;
};
