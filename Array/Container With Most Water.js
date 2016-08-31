/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    var i = 0;
    var j = len-1;
    var k;
    var res = 0;
    
    while(i < j){
        res = Math.max(res, (j - i)*Math.min(height[i], height[j]));
        if (height[i] < height[j]){
            for(k = i+1; k < j && height[k]<=height[i]; k++){}
            i = k;
        } else {
            for(k = j-1; k > i && height[k]<=height[j]; k--){}
            j = k;
        }
    }
    
    return res;
};
