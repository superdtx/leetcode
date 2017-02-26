/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var hashmap = {};
    var i;
    
    nums.map(function(elem){
        hashmap[elem] ? hashmap[elem]++ : hashmap[elem] = 1;
    });
    
    console.log(hashmap);
    
    var priorityArray = [];
    
    Object.keys(hashmap).forEach(function(elem){
        priorityArray.push({data: elem, priority: hashmap[elem]});
    });
    
    priorityArray.sort(function(a, b){
        if (a.priority > b.priority) {
            return -1;
        }else if (a.priority < b.priority) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
    
    console.log(priorityArray);
    
    var result = [];
    
    for(i = 0; i < k; i++){
        result.push(parseInt(priorityArray[i].data));
    }
    
    return result;
};
