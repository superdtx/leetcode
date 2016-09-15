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
        return a.priority <= b.priority;
    });
    
    console.log(priorityArray);
    
    var result = [];
    
    for(i = 0; i < k; i++){
        result.push(parseInt(priorityArray[i].data));
    }
    
    return result;
};
