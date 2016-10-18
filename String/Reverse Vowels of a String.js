/**
Write a function that takes a string as input and reverse only the vowels of a string.
Example 1:
Given s = "hello", return "holle".
Example 2:
Given s = "leetcode", return "leotcede".
Example 3:
Given s = ".,", return ".,".
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    var vowelDict = ['a','e','i','o','u','A','E','I','O','U'];
    var len = s.length;
    var i = 0,
        j = len-1,
        arr = s.split('');
    
    while(i < j){
        while(vowelDict.indexOf(arr[i]) < 0 && i < len){
            i++;
        }
        while(vowelDict.indexOf(arr[j]) < 0 && j > -1){
            j--;
        }
        if(i < j){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        i++;
        j--;
    }
    return arr.join('');
};
