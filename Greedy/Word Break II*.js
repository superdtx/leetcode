var wordBreak = function(s, wordDict) {
    var len = s.length;
    var hasSeg = new Array(len+1);
    var result = [];
    var i, j, k;
    hasSeg.fill(new Array(len+1).fill(false));
    
    hasSeg[0][0]=true;
    
    for(i = 1;i<=len;i++){
        for(j = 0;j<i;j++){
            if(wordDict.has(s.substring(j, i))) {
                hasSeg[j][i] = true;
            } else{
                for(k = j; k<i; k++){
                    if(hasSeg[j][k] & hasSeg[k][i]){
                        hasSeg[j][i] = true;
                        break;
                    }
                }
            }
        }
    }
    
    helper(result, [], s, wordDict, hasSeg, 0);
    
    return result;
};

function helper(result, curArr, s, wordDict, hasSeg, startInx){
    
    if(startInx === s.length){
        result.push(curArr.join(' '));
    }
    
    for(var i = startInx; i<=s.length; i++){
        if(hasSeg[startInx][i]){
            if(wordDict.has(s.slice(startInx, i))){
                curArr.push(s.slice(startInx, i));
                helper(result, curArr.concat(), s, wordDict, hasSeg, i);
                curArr.pop();
            }
        }
    }
}
