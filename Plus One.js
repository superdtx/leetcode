/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    var one = 1;
    var sum = 0;
    
    for(var i = digits.length-1; i >= 0; i--){
        sum = digits[i]+one;
        one = Math.floor(sum / 10);
        digits[i] = sum % 10;
    }
    
    if(one === 1){
        digits.unshift(1);
    }
    
    return digits;
    
};
