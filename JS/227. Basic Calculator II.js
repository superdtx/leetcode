/**
  Implement a basic calculator to evaluate a simple expression string.
  The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.
  You may assume that the given expression is always valid.
  Some examples:
  "3+2*2" = 7
  " 3/2 " = 1
  " 3+5 / 2 " = 5
  Note: Do not use the eval built-in library function.
  */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    var signs = [],
        nums = [],
        num,
        i;
    
    nums = s.replace(/\s/g, '').split(/\+|\-|\*|\/|\ /).map(function(e) { return parseInt(e) }); 
    signs = s.replace(/\s/g, '').split(/[0-9]+/);
    signs.splice(0, 1);
    signs.splice(signs.length - 1, 1);
    
    for(i = 0; i < signs.length;){
        if(signs[i] === '*'){
            num = nums[i] * nums[i + 1];
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else if(signs[i] === '/'){
            num = Math.floor(nums[i] / nums[i + 1]);
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else {
            i++;
        }
    }
    
    num = nums.shift();
    for(i = 0; i < signs.length; i++) {
        if(signs[i] === '+'){
            num += nums.shift();
        } else if (signs[i] === '-'){
            num -= nums.shift();
        }
    }
    
    return num;
};
