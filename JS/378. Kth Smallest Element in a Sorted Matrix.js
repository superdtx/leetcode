/**
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note: 
You may assume k is always valid, 1 ≤ k ≤ n2.
**/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length,
        m = matrix[0].length;
    
    let lo = matrix[0][0],
        hi = matrix[n-1][m-1];
        
    while(lo < hi){
        let mid = lo + Math.floor((hi - lo)/2);
        let count = 0,
            j = m - 1;
            
        for(let i = 0; i < n; i++){
            while(j >= 0 && matrix[i][j] >mid){
                j --;
            }
            count += (j+1);
        }
        
        // mid不够大
        if(count < k){
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};
