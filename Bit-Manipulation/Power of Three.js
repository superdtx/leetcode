/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    if(n===1){
        return true;
    }
    if(n===0 || n%3!==0){
        return false;
    }
    return isPowerOfThree(n/3);
    
};


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    while(n>=3){
        if(n%3!==0){
            break;
        }
        n = n/3;
    }
    
    return n===1;
    
};
