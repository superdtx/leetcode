/**
Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    var I = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    var X = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    var C = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    var M = ['','M','MM','MMM'];
    
    return M[Math.floor(num/1000)]+C[Math.floor((num%1000)/100)]+X[Math.floor((num%100)/10)]+I[(num%10)];
}; 
