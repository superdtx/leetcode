/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(!prices.length){
        return 0;
    }
    
    var low = prices[0];
    var high = prices[0];
    var maxProfit = 0;
    
    for(var i = 1; i< prices.length; i++){
        
        if(prices[i]>high){
            high = prices[i];
        } else if(low>prices[i]){
            low = prices[i];
            high = low;
        }
        
        if((high - low) > maxProfit){
            maxProfit = high - low;
        }
    }
    
    return maxProfit;
};
