/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
**/

//确定一个array里面的mediam 通过公式来算出另一个array里面的median
//https://discuss.leetcode.com/topic/16797/very-concise-o-log-min-m-n-iterative-solution-with-detailed-explanation

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    var len1 = nums1.length;
    var len2 = nums2.length;
    
    if(len1 < len2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    if(len2 === 0){
        return (nums1[Math.floor((len1 - 1)/2)] + nums1[Math.floor(len1/2)])/2;
    }
    
    var lo = 0, hi = len2*2;
    while(lo <= hi){
        var mid2 = Math.floor((lo + hi)/2);
        var mid1 = len1 + len2 - mid2;
        
        var L1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[Math.floor((mid1 - 1)/2)];
        var L2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[Math.floor((mid2 - 1)/2)];
        var R1 = (mid1 === len1 * 2) ? Number.MAX_SAFE_INTEGER : nums1[Math.floor((mid1)/2)];
        var R2 = (mid2 === len2 * 2) ? Number.MAX_SAFE_INTEGER : nums2[Math.floor((mid2)/2)];
        
        if(L1 > R2){
            lo = mid2 + 1;
        } else if(L2 > R1){
            hi = mid2 - 1;
        } else {
            return (Math.max(L1, L2) + Math.min(R1, R2))/2;
        }
    }
    return -1;
};
