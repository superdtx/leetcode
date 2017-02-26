/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    var rLen = matrix.length;
    
    if(rLen === 0) {
        return 0;
    }
    
    var cLen = matrix[0].length;
    
    if(cLen === 0) {
        return 0;
    }
    
    var i = 0;
    var j = cLen - 1;
    
    while(i < rLen && j >= 0) {
        
        if(target === matrix[i][j]){
            return true;
        }
        
        if(target < matrix[i][j]) {
            j--;
        }
        
        if(target > matrix[i][j]) {
            i++;
        }
    }
    
    return false;
};
