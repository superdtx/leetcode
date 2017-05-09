/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
**/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = (num >>> 0).toString(2); //translate to binary
    
    let complement = '';
    for(var i = 0; i < binary.length; i++){
        if(binary[i] === '0') complement += '1';
        else complement += '0';
    }
    
    return parseInt(complement, 2);
};

/**
Probably the best part of two's complement is how it simplifies math. Try adding 2 (0010) and -2 (1110) together and you get 10000. The most significant bit is overflow, so the result is actually 0000. Almost like magic, 2 + -2 = 0.
**/
