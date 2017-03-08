//Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    
    if(root === null){
        return null;
    }
    
    if(root.val <= p.val){
        return inorderSuccessor(root.right, p);
    } else {
        var left = inorderSuccessor(root.left, p);
        return (left !== null)? left: root;
    }
    
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    var res = null;
    
    while(root !== null){
        if(root.val > p.val){
            res = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }
    
    return res;
};
