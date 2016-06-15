/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    var pLen = preorder.length;
    var iLen = inorder.length;
    
    return getRoot(preorder, inorder, 0, pLen-1, 0, iLen-1);
};

function getRoot(preorder, inorder, pStart, pEnd, iStart, iEnd) {
    if(pStart > pEnd || iStart > iEnd){
        return null;
    }
    
    var value = preorder[pStart];
    var node = new TreeNode(value);
    var index = inorder.indexOf(value);
    
    node.left = getRoot(preorder, inorder, pStart+1, index-iStart+pStart, iStart, index-1);
    node.right = getRoot(preorder, inorder, index-iStart+pStart+1, pEnd, index+1, iEnd);
    
    return node;
}
