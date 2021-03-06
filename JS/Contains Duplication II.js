/**
 * 112ms
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hashmap = {};
    var len = nums.length;

    for(var i = 0; i < nums.length; i++){
        if(hashmap[nums[i]]){
            hashmap[nums[i]].push(i);
        } else {
            hashmap[nums[i]] = [i];
        }
    }
    
    var contains = Object.keys(hashmap).some(function(key){
       if(hashmap[key].length < 2){
           return false;
       }
        return hashmap[key].sort().some(function(elem, index, arr){
            return index < arr.length && Math.abs(elem - arr[index+1]) <= k; 
        });
    });
    
    return contains;
};

/**
 * 85ms
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {},
        len = nums.length,
        i;
    
    for (i = 0; i < len; i++) {
        if (map.hasOwnProperty(nums[i])) {
            if (i - map[nums[i]] <= k) {
                return true;
            }
            
            map[nums[i]] = i;
        } else {
            map[nums[i]] = i;
        }
    }
    
    return false;
};
