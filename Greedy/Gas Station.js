/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    var sum = 0;
    var total = 0;
    var k = 0;
    
    for(var i = 0; i < gas.length; i++){
        sum += gas[i] - cost[i];
        //小于0 说明到不了gas station i 所以起始加油站是i+1
        if(sum < 0){
            k = i+1;
            sum = 0;
        }
        
        total += gas[i] - cost[i];
    }
    
    if(total<0){
        return -1;
    } else {
        return k;
    }
    
};
