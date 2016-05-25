/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n === 1){
        return true;
    }
    if(n === 0 || n%2 !== 0) {
        return false;
    }
    
    return isPowerOfTwo(n/2);
};


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    while(n>=2){
        if(n%2!==0){
            break;
        }
        n = n / 2;
    }
    
    return n === 1;
};
