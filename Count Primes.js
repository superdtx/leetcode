/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    if(n < 2){
        return 0;
    }

    var res = 0;
    
    for(var i = 2; i < n; i++){
        prime = true;
        for(j = 2; j*j <= i; j++){
            if(i%j === 0){
                prime = false;
                break;
            }
        }
        prime && res++;
    }
    
    return res;
};
