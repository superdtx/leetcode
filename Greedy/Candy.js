/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    
    var num = ratings.length;
    if(num === 0){
        return 0;
    }
    
    var candys = [];
    var i;
    var total = 0;
    
    candys[0] = 1;
    
    //这个循环保证了右边高级别的孩子一定比左边的孩子糖果数量多
    for(i = 1; i < num; i++){
        if(ratings[i] > ratings[i-1]){
            candys[i] = candys[i-1] + 1;
        } else {
            candys[i] = 1;
        }
    }
    
    //这个循环保证了左边高级别的孩子一定比右边的孩子糖果数量多
    for(i = num - 2; i > -1; i--){
        if(ratings[i] > ratings[i+1] && candys[i] <= candys[i+1]){
            candys[i] = candys[i+1]+1;
        }
    }
    
    candys.forEach(function(elem){
        total += elem;
    });
    
    return total;
};
