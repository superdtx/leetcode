/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var queue = [];
    var node;
    
    if(!root){
        return;
    }
    
    build(root, queue);
    while(queue.length){
        node = queue.shift();
        node.left = null;
        node.right = queue.length > 0 ? queue[0]:null;
    }
    
};

function build(root, queue) {
    if(!root){
        return;
    }
    
    queue.push(root);
    build(root.left, queue);
    build(root.right, queue);
}
