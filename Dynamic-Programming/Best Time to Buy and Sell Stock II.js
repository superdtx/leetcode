/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length < 2){
        return 0;
    }
    
    var maxProfit = 0;
    
    for(var i = 1; i < prices.length; i++){
        
        maxProfit = Math.max(maxProfit, maxProfit+prices[i]-prices[i-1]);
        
    }
    
    return maxProfit;
};
