/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var allRes = [];
    var res = '(';
    findParenthesis(n, 1, 0, res, allRes);
    return allRes;
};

function findParenthesis(n, nLeft, nRight, res, allRes){
    
    if(nLeft > n || nRight > nLeft){
        return;
    }
    
    if(nLeft === n && nRight === n){
        allRes.push(res);
        return;
    }
    
    findParenthesis(n, nLeft+1, nRight, res+'(', allRes);
    findParenthesis(n, nLeft, nRight+1, res+')', allRes);
}
