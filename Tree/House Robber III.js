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
var rob = function(root) {
    var result = robHelper(root);
    return Math.max(result[0], result[1]);
};

function robHelper(node){
    
    if(!node){
        return [0,0];
    }
    
    var left = robHelper(node.left);
    var right = robHelper(node.right);
    var withRootVal, withoutRootVal;
    
    withRootVal = left[1] + right[1] + node.val;
    withoutRootVal = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    
    return [withRootVal, withoutRootVal];
}
