/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var len = s.length;
    var signs = [];
    var nums = [];
    var ch, i, j, num;
    
    for(i = 0; i < len; i++){
        ch = s[i];
        
        if(!isNaN(parseInt(ch))){
            num = 0;
            for (j = i; j < len && !isNaN(parseInt(s[j])); j++) {
                num = num * 10 + parseInt(s[j]);
            }
        
            i = j - 1;
            nums.push(num);
        } else if( ch === '+' || ch === '-' || ch === '*' || ch === '/') {
            signs.push(ch);
        }
    }
    
    for(i = 0; i < signs.length;) {
        if(signs[i] === '*'){
            num = nums[i]*nums[i+1];
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else if (signs[i] === '/'){
            num = Math.floor(nums[i]/nums[i+1]);
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else {
            i++;
        }
    }
    
    num = nums.shift();
    for(i = 0; i < signs.length; i++){
        if(signs[i] === '+'){
            num += nums.shift();
        } else if(signs[i] === '-'){
            num -= nums.shift();
        }
    }
    
    
    return num;
};
