/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var n = board.length;
    var m = board[0].length;
    var isStable = false;
    var i,j;
    
    // In the beginning, every 2nd bit is 0;
    // So we only need to care about when the 2nd bit will become 1.
    for(i = 0; i < n; i++){
        for(j = 0; j < m; j++){
            var lives = calculateLives(board, i, j, n, m);
            
            if(board[i][j] === 1 && lives >=2 && lives <=3){
                board[i][j] = 3;// Make the 2nd bit 1: 01 ---> 11
            }
            
            if(board[i][j] === 0 && lives === 3) {
                board[i][j] = 2;// Make the 2nd bit 1: 00 ---> 10
            }
        }
    }
    
    for(i = 0; i < n; i++) {
        for(j = 0; j < m; j++) {
            board[i][j] >>= 1;  // Get the 2nd state.
        }
    }
};

function calculateLives(board, i, j, n, m){
    var lives = 0;
    
    for(var x = Math.max(i - 1, 0); x <= Math.min(i+1, n-1); x++){
        for(var y = Math.max(j - 1, 0); y <= Math.min(j+1, m-1); y++){
                lives += board[x][y] & 1;
        }
    }
    lives -= board[i][j] & 1;
    return lives;
}
