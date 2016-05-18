/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    var m = matrix.length;
    var n = matrix[0].length;
    var height = [];
    
    for(var i = 0; i < m; i++) {
        height.push([]);
    }
    
    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(matrix[i][j] === '0') {
                height[i][j] = 0;
            } else {
                height[i][j] = (i?height[i-1][j] + 1:1);
            }
        }
    }
    
    var maxArea = 0;
    for(var i = 0; i < m; i++) {
        maxArea = Math.max(maxArea, largestRectangleArea(height[i]));
    }
    
    return maxArea;
};

var largestRectangleArea = function(heights) {
  
  if(heights.length === 0) {
      return 0;
  }
  
  var stack = [];
  var max = 0;
  var leftarea = 0, rightarea = 0;
  heights.push(0);
  
  for(var i=0; i < heights.length; i++) {
      while(stack.length !== 0 && heights[stack[stack.length-1]] > heights[i]) {
          var tmp = stack[stack.length-1];
          stack.pop();
          leftarea = (stack.length === 0? tmp + 1: tmp - stack[stack.length-1])*heights[tmp];
          rightarea = (i - tmp - 1)* heights[tmp];
          max = Math.max(max, (leftarea+rightarea));
      }
      stack.push(i);
  }
  
  return max;  
};
