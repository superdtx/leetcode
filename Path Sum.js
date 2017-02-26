/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null){
        return false;
    }
    return DFS(sum, 0, root);
};

function DFS(target, sum, root) {
    if(root === null){
        return false;
    }
    sum += root.val;
    if(root.left === null && root.right === null && sum === target){
        return true;
    }
    var left = DFS(target, sum, root.left);
    var right = DFS(target, sum, root.right);
    
    return left||right;
}
