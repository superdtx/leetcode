/**
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
**/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var boom = 0;

    for(var point of points){
        var distances = {};
        
        for(var p of points){
            var distance = distanceBetween(point, p);
            if(distances.hasOwnProperty(distance)){
                distances[distance].push(p);
            } else {
                distances[distance] = [point, p];
            }
        }
        
        Object.keys(distances).forEach(function(elem){
            var len = distances[elem].length;
            if(len > 2){
                boom += (len-1)*(len-2);
            }
        });
    }
    
    return boom;
};

var distanceBetween = function(p1, p2){
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
};
