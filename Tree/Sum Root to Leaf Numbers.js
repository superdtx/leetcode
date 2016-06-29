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
var sumNumbers = function(root) {
    
    if(!root){
        return 0;
    }
    
    var sum = [0];

    inorderTraversal(root, 0, sum);
    return sum[0];
};

function inorderTraversal(root, number, sum){
    
    if(!root){
        return;
    }
    
    number = number*10+root.val;
    if(!root.left && !root.right){
        sum[0] += number;
        return;
    }
    
    inorderTraversal(root.left, number, sum);
    inorderTraversal(root.right, number, sum);
    
}
