/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    if (heights === null || heights.length === 0) {
        return 0;
    }
    
    var stack = [];
    
    var max = 0;
    var i = 0;
    
    while(i<heights.length){
        if(stack.length === 0 || heights[i] >= stack[stack.length-1]) {
            stack.push(i);
            i++;
        } else {
            var p = stack.pop();
            var h = heights[p];
            var w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(h*w, max);
        }
    }
    
    return max;
};
