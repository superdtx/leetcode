/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    if(divisor === 0){
        return Number.MAX_VALUE;
    }
    
    if(dividend === 0){
        return 0;
    }
    
    var isNegative = false;
    
    if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)){
        isNegative = true;
    }
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    if(Math.abs(divisor) === 1){
        return isNegative ? -dividend : dividend;
    }
    
    var i = 0, quotient = 0, temp = divisor;
    
    //2, 4, 8 times of divisor
    while (divisor << (i + 1) <= dividend) {
        i++;
    }
    
    while(divisor <= dividend){
        temp = divisor << i;
        
        if (dividend >= temp) {
            quotient += (1 << i);
            dividend -= temp;
        }
        
        i--;
    } 
    
    return isNegative ? -quotient : quotient;
};
