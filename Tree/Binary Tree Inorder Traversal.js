/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    var noteStack = [];
    var result = [];

    while(noteStack.length !== 0 || root!==null){
        if(root !== null){
            noteStack.push(root);
            root = root.left;
        } else {
            root = noteStack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    
    return result;
};
