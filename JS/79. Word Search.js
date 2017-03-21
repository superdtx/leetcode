/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(dfs(board, word, i, j, 0)){
                return true;
            }
        }
    }
    
    return false;
};

function dfs(board, word, row, col, matchedLen){
    
    if(matchedLen >= word.length) {
        return true;
    }
    
    if(row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }
    
    if(board[row][col] === word.charAt(matchedLen)){
        var tmpChar = board[row][col];
        board[row][col] = '#';
        matchedLen++;
        var res = dfs(board, word, row + 1, col, matchedLen) || dfs(board, word, row - 1, col, matchedLen) || dfs(board, word, row, col + 1, matchedLen) || dfs(board, word, row, col - 1, matchedLen);
        board[row][col] = tmpChar;
        return res;
    }
    return false;
}
