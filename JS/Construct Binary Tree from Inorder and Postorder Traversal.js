/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var iLen = inorder.length;
    var pLen = postorder.length;
    
    return getRoot(inorder, postorder, 0, iLen-1, 0, pLen-1);
};

function getRoot(inorder, postorder, iStart, iEnd, pStart, pEnd) {
    
    if(iStart > iEnd || pStart > pEnd) {
        return null;
    }
    
    var value = postorder[pEnd];
    var node = new TreeNode(value);
    var index = inorder.indexOf(value);
    
    node.left = getRoot(inorder, postorder, iStart, index-1, pStart, pStart-iStart+index-1);
    node.right = getRoot(inorder, postorder, index+1, iEnd, pStart-iStart+index, pEnd-1);
    
    return node;
}
