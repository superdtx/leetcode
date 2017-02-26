/**
  Write a function to find the longest common prefix string amongst an array of strings.
  */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(!strs.length){
        return '';
    }
    
    var longestCP = '';
    
    strs.sort(function (a, b) { 
        return a.length - b.length; 
    });
    
    for(var i = 0; i < strs[0].length; i++){
        for(var j = 0; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return longestCP;
            }
        }
        longestCP += strs[0][i];
    }
    
    return longestCP;
};

//Solution 2
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    'use strict';
    if(!strs.length){
        return '';
    }
    
    return strs.reduce(function(prev, curr){
        let i = 0;
        while(prev[i] && curr[i] && prev[i] === curr[i]) {
            i++;
        }
        return prev.substr(0, i);
    });
};
