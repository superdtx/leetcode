/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0){
        return x;
    }
    
    var res = 0;
    var isNeg = 1;
    
    if(x < 0){
        isNeg = -1;
        x = x*(-1);
    }
    
    while(x !== 0){
        res = res*10 + x % 10;
        x = Math.floor(x/10);
        console.log(x);
    }
    
    return res*isNeg;
};
