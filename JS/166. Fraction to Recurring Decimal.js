/*
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

Given numerator = 1, denominator = 2, return "0.5".
Given numerator = 2, denominator = 1, return "2".
Given numerator = 2, denominator = 3, return "0.(6)".
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    var isNegative = '';
    
    if(numerator*denominator < 0){
        isNegative = '-';
    }
    
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    var ans = Math.floor(numerator/denominator);
    var rem = numerator % denominator;
    
    if(!rem){
        return isNegative+ans;
    }
    
    var arr = [];
    var remHash = [];
    remHash.push(rem);
    
    while(rem){
        rem *= 10;
        
        var num = Math.floor(rem/denominator);
        rem %= denominator;
        
        var pos = remHash.indexOf(rem);
        arr.push(num);
        remHash.push(rem);
        
        if(pos > -1){
            arr.splice(pos, 0, '(');
            arr.push(')');
            break;
        }
        
    }
    
    return isNegative+ans+'.'+arr.join('');
};
