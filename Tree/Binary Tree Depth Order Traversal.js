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
var preorderTraversal = function(root) {
    
    var result = [];
    var currentNode;
    
    if(root === null){
        return result;
    }
    
    var nodeStack = [];
    nodeStack.push(root);
    
    while(nodeStack.length > 0){
        currentNode = nodeStack.pop();
        result.push(currentNode.val);
        
        if(currentNode.right){
            nodeStack.push(currentNode.right);
        }
        
        if(currentNode.left){
            nodeStack.push(currentNode.left);
        }
    }
    
    return result;
};
