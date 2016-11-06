/**
  A message containing letters from A-Z is being encoded to numbers using the following mapping:
  'A' -> 1
  'B' -> 2
  ...
  'Z' -> 26
  Given an encoded message containing digits, determine the total number of ways to decode it.
  For example,
  Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
  The number of ways decoding "12" is 2.
  */
  
/**
思路：
假设解码函数为h。对于一位数X，只能解码成h[X]。而对于一个两位数XY：
1. 如果XY<=26，那么能解码成h[X], h[Y], h[XY]
2. 否则，只能解码成h[X], h[Y]
由于只要求计算最多的解码方法而并不要求每种解码的结果，所以用DP做更为合适高效。

定义dp[i+1]为能解码长度为i+1的string s[0:i]的方法数：
1. dp[0] = 1，dp[1] = 0
2. v = s[i-1]*10+s[i]：
v<=26： dp[i+1] = dp[i] + dp[i-1]
v>26：dp[i+1] = dp[i]

corner case：有0的情况
Y = 0：显然无法解码成h[Y]，此时只能看h[XY]是否valid：dp[i+1] = dp[i-1]
X = 0：显然无法解码成h[XY]，此时dp[i+1] = dp[i]

整理总结corner case：
XY可以解码的条件是：9<XY<=26
Y可以单独解码的条件是：Y != '0'
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = [];
    let len = s.length;
    
    dp[0] = 1;
    dp[1] = 1;
    
    if(len === 0 || s.charAt(0) < '1' || s.charAt(0) > '9'){
        return 0;
    }
    
    for(let i = 1; i < len; i++){
        
        x = s.charAt(i-1) - '0';
        y = s.charAt(i) - '0';
        let cur = x*10+y;
        
        dp[i+1] = 0;
        
        //interpret together
        if(cur > 9 && cur <= 26){
            dp[i+1] += dp[i-1];
        }
        
        //interpret sperate
        if(y !== 0){
            dp[i+1] += dp[i];
        }
    
    }
    
    return dp[len];
};
