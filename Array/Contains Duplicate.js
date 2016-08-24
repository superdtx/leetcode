/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length === 0){
        return false;
    }
    var res = [];
    res = nums.sort().filter(function(val, ind, arr){
        if(ind < arr.length - 1){
            return val === arr[ind+1];
        }
    });
    
    return res.length > 0;
};
