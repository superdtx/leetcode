/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    var result = [];
    var curRow = 0;
    
    result.push(1);
    
    if(rowIndex === 0) {
        return result;
    }
    
    while(curRow < rowIndex) {
        curRow++;
        
        for(var i = curRow - 1; i > 0; i--){
            result[i] = result[i] + result[i-1];
        }
        
        result.push(1);
    }
    
    return result;
    
};
