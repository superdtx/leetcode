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
var postorderTraversal = function(root) {
    
    var nodeStack = [];
    var lastVisitNode = null;
    var result = [];
    
    while(nodeStack.length !== 0 || root !== null){
        if(root !== null){
            nodeStack.push(root);
            root = root.left;
        } else {
            var peekNode = nodeStack[(nodeStack.length-1)];
            if(peekNode.right !== null && lastVisitNode !== peekNode.right){
                root = peekNode.right;
            } else {
                result.push(peekNode.val);
                lastVisitNode = nodeStack.pop();
            }
        }
    }
    
    return result;
};
