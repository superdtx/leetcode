/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length < 2){
        return 0;
    }
    
    var low = prices[0];
    var maxProfit = prices[1]-prices[0];
    
    for(var i = 1; i< prices.length; i++){
        
        low = Math.min(low, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i]-low);
    }
    
    return maxProfit;
};
