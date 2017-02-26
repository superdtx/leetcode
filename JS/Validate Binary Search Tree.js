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
var isValidBST = function(root) {
    return isBST(root, null, null); 
};

function isBST(root, min, max){
    if(!root){
        return true;
    }
    
    if((min!==null && root.val <= min) || (max!==null && root.val >= max)){
        return false;
    }
    
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}
