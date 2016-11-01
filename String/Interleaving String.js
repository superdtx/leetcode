/**
  Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
  For example,
  Given:
  s1 = "aabcc",
  s2 = "dbbca",
  When s3 = "aadbbcbcac", return true.
  When s3 = "aadbbbaccc", return false.
  */

/*
 * 对于字符串s2="dbbca"，s1="aabcc"，s3="aadbbcbcac"。设dp[i][j]代表s1[1..i]和s2[1...j]是否为s3[1...i+j]的交错串，
 * 则我们可以得出递归方程为dp[i][j]=(s3[i+j]==s1[i]&&dp[i-1][j])||(s3[i+j]==s2[j]&&dp[i][j-1])；即当s1和s2末尾字符和s3的末尾字符相等时，
 * s3[1...i+j]是否为s1[1...i]和s2[1...j]的交错串，可以转化为s3[1...i+j-1]是否为s1[1...i-1]和s2[1...j]或者s1[1...i]和s2[1...j-1]交错串的判定
 */
 
 
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
    let dp = [];
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;
    
    if(len1 + len2 !== len3){
        return false;
    }
    
    for(let i = 0; i <= len1; i++){
        const arr = new Array(len2+1).fill(false);
        dp.push(arr);
    }
    
    dp[0][0] = true;
    
    for(let i = 1; i <= len1; i++){
        dp[i][0] = s1.charAt(i - 1) === s3.charAt(i-1);
        
        if(!dp[i][0]){
            break;
        }
    }
    
    for(let j = 1; j <= len2; j++){
        dp[0][j] = s2.charAt(j - 1) === s3.charAt(j - 1);
        
        if(!dp[0][j]){
            break;
        }
    }
    
    for(let i = 1; i <= len1; i++){
        for(let j = 1; j <= len2; j++){
            let k = i+j-1;
            
            dp[i][j] = (dp[i][j-1] && (s2.charAt(j-1) === s3.charAt(k))) || (dp[i-1][j] && (s1.charAt(i-1) === s3.charAt(k)));
        }
    }
    
    return dp[len1][len2];
};
