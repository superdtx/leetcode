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
var maxPathSum = function(root) {
    
    var max = [Number.NEGATIVE_INFINITY];
    maxSum(root, max);
    return max[0];
};

function maxSum(node, max){
    if(!node){
        return 0;
    }
    
    /* Maximum can be either
       1. The whole sub-tree, or
       2. Just the left subtree + root or
       3. Right sub-tree + root. 
    Get the maximum values from the left and right sub-trees 
    0 means not to include maxLeft/maxRight */
    var maxLeft = Math.max(0, maxSum(node.left, max));
    var maxRight = Math.max(0, maxSum(node.right, max));

    max[0] = Math.max(max[0], node.val+maxLeft+maxRight);

    return Math.max(maxLeft, maxRight)+node.val;
}
