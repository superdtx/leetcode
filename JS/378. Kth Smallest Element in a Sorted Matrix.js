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
Solution 2 : Binary Search
We are done here, but let's think about this problem in another way:
The key point for any binary search is to figure out the "Search Space". For me, I think there are two kind of "Search Space" -- index and range(the range from the smallest number to the biggest number). Most usually, when the array is sorted in one direction, we can use index as "search space", when the array is unsorted and we are going to find a specific number, we can use "range".

Let me give you two examples of these two "search space"

index -- A bunch of examples -- https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/ ( the array is sorted)
range -- https://leetcode.com/problems/find-the-duplicate-number/ (Unsorted Array)
The reason why we did not use index as "search space" for this problem is the matrix is sorted in two directions, we can not find a linear way to map the number and its index.
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
