/**
  The count-and-say sequence is the sequence of integers beginning as follows:
  1, 11, 21, 1211, 111221, ...
  1 is read off as "one 1" or 11.
  11 is read off as "two 1s" or 21.
  21 is read off as "one 2, then one 1" or 1211.
  Given an integer n, generate the nth sequence.
  Note: The sequence of integers will be represented as a string.
  */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    var currentArray = ['1'];
    var tempArray, k;
    
    for(var i = 1; i < n; i++){
        tempArray = [];
        k = undefined;
        for(var j = 0; j < currentArray.length; j++){
            if(parseInt(currentArray[j]) !== parseInt(tempArray[k+1])){
                k = k + 2 || 0;
                tempArray.push('1', currentArray[j]);
            } else {
                tempArray[k]++;
            }
        }
        currentArray = tempArray;
    }
    return currentArray.join('');
};
