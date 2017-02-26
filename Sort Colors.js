/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  
  var len = nums.length;
  var blueStarts = len - 1;
  var i;
  
  for(i = 0; i <= blueStarts;){
      if(nums[i] === 0) {
          var temp = nums[i];
          nums.splice(i, 1);
          nums.unshift(temp);
          i++;
      } else if(nums[i] === 2){
          nums.push(nums[i]);
          nums.splice(i, 1);
          blueStarts --;
      } else {
          i++;
      }
  }
};
