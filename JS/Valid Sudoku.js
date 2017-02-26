/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return validateColumn(board) && validateRow(board) && validateBlock(board);
};

function validateBlock(board){
    for(var k = 0; k < 9; k++) {
        var hashmap = {};
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(!validateNum(board[i+Math.floor(k/3)*3][j+Math.floor(k%3)*3], hashmap)){
                    return false;
                }
                
            }
        }
    }
    return true;
}

function validateColumn(board){
    for(var i = 0; i < 9; i++){
        var hashmap = {};
        for(var j = 0; j < 9; j++){
            if(board[j][i] !== '.' && hashmap[board[j][i]]){
                return false;
            }
            hashmap[board[j][i]] = true;
        }
    }
    return true;
}

function validateRow(board){
    for(var i = 0; i < 9; i++){
        var hashmap = {};
        for(var j = 0; j < 9; j++){
            if(board[i][j] !== '.' && hashmap[board[i][j]]){
                return false;
            }
            hashmap[board[i][j]] = true;
        }
    }
    return true;
}

function validateNum(num, hashmap){
    
    if(num === '.'){
        return true;
    } else if (num > 9 || num < 1) {
        return false;
    } else if(hashmap[num]){
        return false;
    }
    
    hashmap[num] = true;
    return true;
}
