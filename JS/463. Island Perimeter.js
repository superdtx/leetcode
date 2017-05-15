/**
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
**/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    var islands = 0,
        neighbours = 0;
    
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                islands++;
                if(i < grid.length - 1 && grid[i+1][j] === 1) {
                    neighbours++;
                } //neighbours to the bottom
                if(j < grid[i].length - 1 && grid[i][j+1] === 1) {
                    neighbours++;
                } //neighbours to the right
            }
        }
    }
    
    return islands*4 - neighbours*2;
};
