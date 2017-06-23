/**
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
**/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var lo = 0, hi = n;
    
    while(lo + 1 < hi){
        var mid = lo + Math.floor((hi - lo)/2);
        var numsCoin = (1+mid)*mid/2;
        
        if(numsCoin === n){
            return mid;
        } else if(numsCoin < n){
            lo = mid;
        } else {
            hi = mid;
        }
        
    }
    
    if((1+hi)*hi/2 === n){
        return hi;
    }
    
    return lo;
};
