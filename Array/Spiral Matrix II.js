/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    if(!n){
        return [];
    }
    
    if(n === 1){
        return [[n]];
    }
    
    var i, j, k;
    var res = [];
    
    for(i = 0; i < n; i++){
        var temp = [];
        for(j = 0; j < n; j++){
            temp.push(0);    
        }
        res.push(temp);
    }
    
    
    var l = 0; 
    var r = n-1; 
    var u = 0; 
    var d = n-1;
    var right = true; 
    var down = false; 
    var left = false; 
    var up = false;
    
    i = 0;
    j = 0;
    k = 1;
    while(k <= n*n){
        console.log(i, j);
        res[i][j] = k;
        console.log(res);
        k+=1;
        
        if(right){
            if(j +1 <= r){
                j += 1;
            } else {
                right = false;
                down = true;
                u += 1;
                i += 1;
            }
            
        } else if(down){
            if(i+1 <= d){
                i += 1;
            } else {
                down = false;
                left = true;
                r -= 1;
                j -= 1;
            }
        } else if(left){
            if(j-1 >= l){
                j -= 1;
            } else {
                left = false;
                up = true;
                d -= 1;
                i -= 1;
            }
        } else if(up){
            if(i-1 >= u){
                i -= 1;
            } else {
                up = false;
                right = true;
                l += 1;
                j += 1;
            }
        } 
    }
    return res;
};
