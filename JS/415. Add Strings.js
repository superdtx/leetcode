/**
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
**/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let carry = 0;
    let maxLen = Math.max(num1.length, num2.length);
    let i = 0;
    let sum = '';
    
    while(i < maxLen || carry > 0){
        let num2Digit = i < num2.length ? digit.indexOf(num2[num2.length - 1 - i]) : 0;
        let num1Digit = i < num1.length ? digit.indexOf(num1[num1.length - 1 - i]) : 0;
        let digitSum = carry + num1Digit + num2Digit;
        
        carry = Math.floor(digitSum/10);
        sum = digitSum % 10 + sum;
        i++;
    }
    
    return sum;
};
