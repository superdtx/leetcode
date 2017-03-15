/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    var res = [];
    if(s.length === 0){
        return res;
    }
    
    dfs(s, res, 0, []);
    
    return res;
};

function dfs(s, res, searchFrom, localRes){
    if(searchFrom === s.length){
        res.push(localRes);
        return;
    }
    
    for(var i = searchFrom; i< s.length; i++){
        if(isPalindrome(s, searchFrom, i)){
            localRes.push(s.substr(searchFrom, i - searchFrom + 1));
            dfs(s, res, i+1, localRes.concat());
            localRes.pop();
        }
    }
}

function isPalindrome(s, start, end){
    while(start <= end){
        if(s[start++] !== s[end--]){
            return false;
        }
    }
    
    return true;
}
