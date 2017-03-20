/*
Implement pow(x, n).
*/

//assume that n is an integer

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1;
    }
    var negative;
    
    if(n < 0){
        negative = true;
        n = -n;
    } else {
        negative = false;
    }
    
    var ret = bs(x, n);
    
    if(negative){
        return 1/ret;
    }
    
    return ret;
};

function bs(y, n){
    if(n === 0){
        return 1;
    }
    
    var ret = bs(y, Math.floor(n/2));
    
    if(n & 1){
        return ret*ret*y;
    } else {
        return ret*ret;
    }
}


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var ret = 1;
    var negative = n < 0 ? (n *= -1, true) : false;
    
    while(n){
        (n & 1) && (ret *= x);
        x *= x;
        n >>>= 1; //unsigned integer
    }
    
    return negative ? 1/ret : ret;
};
