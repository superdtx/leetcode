/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    var array = [];
    var path = [];
    
    treePaths(root, array, path);
    
    return array;
};

function treePaths(root, array, path){
    if(!root){
        return;
    }
    
    path.push(root.val);
    if(!root.left&&!root.right){
        var pathString = '';
        for(var i = 0; i < path.length-1; i++){
            pathString += path[i]+'->'; 
        }
        pathString += path[path.length-1]; 
        array.push(pathString);
    }
    treePaths(root.left, array, path.concat());
    treePaths(root.right, array, path.concat());
}
