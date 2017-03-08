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



/**
 * C(n, k) = C(n-1, k) + C(n-1, k-1)
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
   
   result = helper(n, k);
   
   return result;
};

var helper = function(n, k){
    
   var tempResult = [];
   
   if(n === k){
       var temp = [];
       tempResult = [];
       for(var i = 1; i <= n; i++){
           temp.push(i);
       }
       tempResult.push(temp);
       return tempResult;
   }
   
   if(k === 1){
       tempResult = [];
       for(var j = 1; j <= n; j++){
           tempResult.push([j]);
       }
       return tempResult;
   }
   
   var result1 = helper(n-1, k);
   var result2 = helper(n-1, k-1);

   result2.forEach(function(elem){
       elem.push(n);
   });
   
   return result1.concat(result2);
   
};
