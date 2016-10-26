/**
Given a digit string, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below.
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(!digits.length){
        return [];
    }
    
    var letter = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    var resolution = [];
    for(var j = 0; j < digits.length; j++){
        resolution.push('0');
    }
    
    var allResolution = [];
    backTracking(digits, letter, resolution, allResolution, 0);
    
    return allResolution;
};

function backTracking(digits, letter, resolution, allResolution, digitConsidered){
    if(digitConsidered === digits.length){
        allResolution.push(resolution.join(''));
        return;
    }
    
    var currLetter = letter[digits[digitConsidered] - 2];
    for(var i = 0; i < currLetter.length; i++){
        resolution[digitConsidered] = currLetter[i];
        backTracking(digits, letter, resolution, allResolution, digitConsidered+1);
    }
}
