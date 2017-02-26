/*
Take the arrays A and B, and compute all the possible sums of two elements. 
Put the sum in the Hash map, and increase the hash map value if more than 1 pair 
sums to the same value.

Compute all the possible sums of the arrays C and D. If the hash map contains the 
opposite value of the current sum, increase the count of four elements sum to 0 by 
the counter in the map.
*/


/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let sums = {};
    let count = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            let sum = A[i] + B[j];
            if(sums.hasOwnProperty(sum)){
                sums[sum]++;
            } else {
                sums[sum] = 1;
            }
        }
    }

    for(let i = 0; i < C.length; i++){
        for(let j = 0; j < D.length; j++){
            let sum = -(C[i] + D[j]);
            if(sums[sum]){
                count+=sums[sum];
            }
        }
    }
    return count;
};
