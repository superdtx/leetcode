/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    
    helper(1, [], n, k, result);
    
    return result;    
};

function helper(start, curArr, n, k, result){
    if(curArr.length === k){
        result.push(curArr);
        return;
    }
    
    var i;
    
    for(i = start; i <= n; i++){
        curArr.push(i);
        helper(i+1, curArr.concat(), n, k, result);
        curArr.pop();
    }
}
