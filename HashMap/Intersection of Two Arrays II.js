/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    
    nums1.map(function(elem){
        if(nums2.indexOf(elem) > -1){
            nums2.splice(nums2.indexOf(elem), 1);
            res.push(elem);
        }
    });
    
    return res;
};
