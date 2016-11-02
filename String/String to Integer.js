/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    let len = str.length;
    let numberStarted = false;
    let isNegative = false;
    let result = 0;
    
    for(let i = 0; i < len; i++){
        
        var cur = str.charAt(i);
        var curInt = parseInt(cur);

        if(!numberStarted){
            if(cur === ' '){
                continue;
            }
            
            if(cur === '-'){
                isNegative = true;
                numberStarted = true;
                continue;
            }
            
            if (cur === '+'){
                numberStarted = true;
                continue;
            }
            
            if(!isNaN(curInt)){
                numberStarted = true;
                result = result*10 + curInt;
            }
            
            if(isNaN(curInt)){
                numberStarted = true;
                return getResult(isNegative, result);
            }
        } else {
            if(isNaN(curInt)){
                return getResult(isNegative, result);
            } else {
                result = result*10 + curInt;
            }
        }
    }
    return getResult(isNegative, result);
};

//JavaScript doesn't have such concern
function getResult(isNegative, result){
    result = isNegative? result * (-1) : result;
    
    if (result > 2147483647) {
        result = 2147483647;
    } else if (result < -2147483648) {
        result = -2147483648;
    }
    
    return result;
}
