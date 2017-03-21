/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var row = matrix.length;
    
    if(row === 0){
        return [];
    }
    
    var col = matrix[0].length;
    
    var ret = [];
    
    var l = 0; 
    var r = col-1; 
    var u = 0; 
    var d = row-1;
    
    var right = true; 
    var down = false; 
    var left = false; 
    var up = false;
    
    var k = 0;
    var i = 0;
    var j = 0;
    
    while(k < row*col){
        
        ret[k] = matrix[i][j];
        k++;
        
        if(right){
            if(j+1 <= r){
                j +=1;
            } else {
                right = false;
                down = true;
                i++;
                u++; //up's future limit
            }
        }else if(down){
            if(i+1 <= d){
                i++;
            } else {
                down = false;
                left = true;
                j--;
                r--; //right's future limit
            }
        }else if(left){
            if(j-1 >=l){
                j--;
            } else {
                up = true;
                left = false;
                i--;
                d--; //down's future limit
            }
        }else if(up){
            if(i - 1 >= u){
                i--;
            } else {
                right = true;
                up = false;
                j++;
                l++; //left's future limit
            }
        }
    }
    return ret;
};
