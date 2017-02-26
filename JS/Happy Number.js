/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    if( n === 1){
        return true;
    }
    
    var m = n;
    var sum = calculateSum(m);
    var hashmap = {};
    
    while(sum !== 1){
        
        if(hashmap[sum]) {
            return false;
        }
        
        hashmap[sum] = true;
        m = sum;
        sum = calculateSum(m);
        
    }
    
    return true;
};

function calculateSum(m){
    var sum = 0;
    
    while(m) {
        sum += Math.pow(m%10, 2);
        m = Math.floor(m/10);
    }
    
    return sum;
}
