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
var isBalanced = function(root) {
    
    if(root === null){
        return true;
    }
    
    return getHeight(root) === -1 ? false : true;
};

function getHeight(root){
    if(root === null){
        return 0;
    }
    
    var left = getHeight(root.left);
    if(left === -1){
        return -1;
    }
    
    var right = getHeight(root.right);
    if(right === -1){
        return -1
    }
    
    return Math.abs(left-right) > 1 ? -1 : Math.max(left, right)+1
}
