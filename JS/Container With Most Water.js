/**
 * @param {number[]} height
 * @return {number}
 */
 
 /*
    设置两个指针i, j, 一头一尾, 相向而行. 假设i指向的挡板较低, j指向的挡板较高(height[i] < height[j]).
    下一步移动哪个指针?
    -- 若移动j, 无论height[j-1]是何种高度, 形成的面积都小于之前的面积.
    -- 若移动i, 若height[i+1] <= height[i], 面积一定缩小; 但若height[i+1] > height[i], 面积则有可能增大.
    综上, 应该移动指向较低挡板的那个指针.
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


/**
 * @param {number[]} height
 * @return {number}
 */
 
 /*
    a10 - a21 if a10 < a21, a10 is used to calculate area. To increase the chance to get more water, we have to enhance weakness
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
            i += 1;
        } else {
            j -= 1;
        }
    }
    
    return res;
};
