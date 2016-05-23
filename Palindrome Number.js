/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x < 0){
        return false;
    } else if (x === 0){
        return true;
    } else {
        var tmp = x;
        var y = 0;
        
        while(x !== 0) {
            y = y*10 + x%10;
            x = Math.floor(x/10);
        }
        if(y === tmp){
            return true;
        } else {
            return false;
        }
    }
};
