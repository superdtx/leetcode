/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 
 /*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/

/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/
var rotate = function(matrix) {
    var n = matrix.length;
    var i, j;
    for(i = 0; i < Math.ceil(n/2); i++){
        var temp = matrix[i];
        matrix[i] = matrix[n-1-i];
        matrix[n-1-i] = temp;
    }
    
    for(i = 0; i < n; i++){
        for(j = i+1; j < n; j++){
            var tempElem = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tempElem;
        }
    }
};
