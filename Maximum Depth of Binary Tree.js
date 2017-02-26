/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    function getGreater(a, b){
        return a>b? a:b;
    }
    
    if (root === null) {
        return 0;
    }
    
    return getGreater(maxDepth(root.left), maxDepth(root.right))+1;
};
