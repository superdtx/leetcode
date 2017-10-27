/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    stats = {};
    for(let i = 0; i < moves.length; i++){
        if(stats[moves[i]] === undefined){
            stats[moves[i]] = 0;
        }
        stats[moves[i]]++;
    }
    
    if(stats["L"] === stats["R"] && stats["U"] === stats["D"]){
        return true;
    }
    
    return false;
};


/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    return (moves.split("L").length === moves.split("R").length) && (moves.split("U").length === moves.split("D").length);
};
