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
var sumOfLeftLeaves = function(root) {
    if(root === null){
        return 0;
    }
    return getSum(root, false);
};

function getSum(node, isLeft){
    var res = 0;
    if(node.left === null && node.right === null){
        res += isLeft ? node.val : 0;
        return res;
    }
    if(node.left !== null) res += getSum(node.left, true);
    if(node.right !== null) res += getSum(node.right, false);
    return res;
}
