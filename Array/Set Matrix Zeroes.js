/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    var m = matrix.length;
    var n = matrix[0].length;
    var i, j;
    var col = {};
    var row = {};
    
    for(i = 0; i< m; i++){
        for(j = 0; j < n; j++){
            if(!matrix[i][j]){
                row[j]='';
                col[i]='';
            }
        }
    }
    
    Object.keys(row).forEach(function(elem){
        for(i = 0; i<m;i++){
            matrix[i][elem]=0;
        }
    });

    Object.keys(col).forEach(function(elem){
        for(j = 0; j<n;j++){
            matrix[elem][j]=0;
        }
    });
};
