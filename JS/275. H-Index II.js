/**
Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?
**/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    var len = citations.length;
    
    var lo = 0, hi = len - 1;
    
    while(lo + 1 < hi){
        var mid = lo + Math.floor((hi - lo)/2);
        
        if(citations[mid] >= len - mid){
            hi = mid;
        } else {
            lo = mid;
        }
    }
    
    if(citations[lo] >= len - lo){
        return len - lo;
    } else if (citations[hi] >= len - hi){
        return len - hi;
    }
    
    return 0;
};
