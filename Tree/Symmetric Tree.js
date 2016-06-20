/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    
    return recursiveTraversal(root.left, root.right);
};

function recursiveTraversal(left, right){
    
    if(left===null && right===null){
        return true;
    } else if (left===null || right===null){
        return false;
    }
    
    var cond1=left.val===right.val;
    var cond2=recursiveTraversal(left.left, right.right);
    var cond3=recursiveTraversal(left.right, right.left);
    
    return cond1&&cond2&&cond3;
    
}
