/**
Given two numbers represented as strings, return multiplication of the numbers as a string.
Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/

// BETTER SOLUTION
//  `num1[i] * num2[j]` will be placed at indices `[i + j`, `i + j + 1]` 

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    if(!parseInt(num1) || !parseInt(num2)){
        return '0';
    }
    
    var i, j;
    var len1 = num1.length;
    var len2 = num2.length;
    var simpleResult = [];

    for(i = 0; i < len1; i++){
        for(j = 0; j < len2; j++){
            simpleResult[i+j] !== undefined ?  (simpleResult[i+j] += parseInt(num1[i])*parseInt(num2[j])) : simpleResult.push(parseInt(num1[i])*parseInt(num2[j]));
        }
    }
    
    var carryBit = 0;
    for(i = simpleResult.length - 1; i >= 0; i--){
        var temp = (simpleResult[i] + carryBit) % 10;
        carryBit = Math.floor((simpleResult[i] + carryBit) / 10);
        simpleResult[i] = temp;
    }
    carryBit && simpleResult.unshift(carryBit);
    
    return simpleResult.join('');
};
