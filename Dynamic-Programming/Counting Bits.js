/**
  当一个数为2的整数幂的时候，1的个数为1，比如2（10) 和4(100)，8(1000)
  在这之后就是前一个序列的数+1 比如 9(1001) = 1(1) + 8 (1) = 2
  就是把一个数分解为小于它的最大2的整数幂 + x
  */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    var res = [];
    var pow = 1;
    var pow1 = 1;
    
    res[0] = 0;
    
    for(var i = 1; i <= num; i++){
        if(i === pow){
            res[i] = 1;
            pow1 = pow;
            pow *= 2;
        } else {
            res[i] = res[pow1] + res[i - pow1];
        }
    }
    return res;
};
