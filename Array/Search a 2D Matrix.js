/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    var rLen = matrix.length;
    if(rLen === 0) {
        return false;
    }
    
    var cLen = matrix[0].length;
    var start = 0;
    var end = rLen*cLen - 1;
    var i = 0, j = 0;
    
    while(start <= end){
        mid = Math.floor((start + end)/2);
        i = Math.floor(mid/cLen);
        j = mid % cLen;
        
        if(matrix[i][j] === target) {
            return true;
        }
        
        if(matrix[i][j] < target) {
            start = mid + 1;
        } else if(matrix[i][j] > target) {
            end = mid - 1;
        }
    }
    
    return false;
};
