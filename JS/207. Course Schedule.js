/*
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
click to show more hints.

Hints:
This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
Topological sort could also be done via BFS.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //邻接表 入度
    var map = [];
    var indegree = [];
    
    for(var i = 0; i < numCourses; i++){
        map.push([]);
        indegree.push(0);
    }

    prerequisites.forEach(function(elem){

        var from = elem[1];
        var to = elem[0];
        
        map[from].push(to);
        indegree[to]++;
    });
    
    var queue = [];
    var finishNum = 0;

    //处理本来就没有依赖的
    for(var i = 0; i < numCourses; i++){
        //indegree为0 没有依赖
        if(!indegree[i]){
            queue.push(i);
            finishNum++;
        }
    }

    while(queue.length){
        var from = queue.shift();

        map[from].forEach(function(to) {
          if (--indegree[to] === 0) {
            queue.push(to);
            finishNum++;
          }
        });
    }
    
    return finishNum === numCourses;
};
