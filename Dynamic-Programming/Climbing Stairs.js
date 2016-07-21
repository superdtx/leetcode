/*
You're not counting the number of steps involved, just the number of paths. 
For each path that gets to n−1n−1 steps, there is exactly one way to finish the stairs (namely, take the last step). 
With getting to n−2n−2, there is only one way to finish at that point if you insist on taking two steps at once. 
(If you take one step, you're instead back to the first scenario.) 
In both scenarios, we don't need to add anything else on: just add the number of paths that get you to n−1n−1 and the number that get you to n−2n−2.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [];
    var i;
    
    arr[0]=0;
    arr[1]=1;
    arr[2]=2;
    
    for(i = 3; i <= n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    
    return arr[n];
};
