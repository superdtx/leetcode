/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length < 2) {
        return 0;
    }
    
    var len = prices.length;
    
    var maxProfitfromHead = [];
    var maxProfitfromTail = [];
    maxProfitfromHead[0] = 0;
    maxProfitfromTail[len-1] = 0;
    var max = 0;
    
    var low = prices[0];
    var high = prices[len-1];
    
    for(var i = 1; i<len; i++){
        maxProfitfromHead[i] = Math.max(maxProfitfromHead[i-1], prices[i]-low);
        low = Math.min(low, prices[i]);
    }
    
    for(var j = len-2; j>=0; j--){
        maxProfitfromTail[j] = Math.max(maxProfitfromTail[j+1], high - prices[j]);
        high = Math.max(high, prices[j]);
    }
    
    for(var k = 0; k < len; k++){
        max = Math.max(max, maxProfitfromHead[k]+maxProfitfromTail[k]);
    }
    
    return max;
};
