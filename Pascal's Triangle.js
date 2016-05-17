/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    pascalsTriangle = [];
    
    if(numRows === 0){
        return pascalsTriangle;
    }
    if(numRows  > 0 ){
        pascalsTriangle.push([1]);
    } 
    if(numRows > 1) {
        pascalsTriangle.push([1, 1]);
    } 
    if(numRows > 2) {
        
        for(var i = 2; i < numRows; i++) {
            var innerArray = [];
            innerArray.push(1);
            for(var j = 0; j<i-1; j++) {
                innerArray.push(pascalsTriangle[i-1][j]+pascalsTriangle[i-1][j+1]);
            }
            innerArray.push(1);
            pascalsTriangle.push(innerArray);
        }
    }
    
    return pascalsTriangle;
};
