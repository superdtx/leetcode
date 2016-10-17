/**
Given a complete binary tree, count the number of nodes.
Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
//Recursive
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root)
    return 0;

  var l = findDepth(root.left);
  var r = findDepth(root.right);

    console.log(l, r)
  if (l === r)
    return Math.pow(2, l) + countNodes(root.right);
  else
    return Math.pow(2, r) + countNodes(root.left);
};

function findDepth(node) {
    return node ? 1 + findDepth(node.left) : 0;
}

//TODO
//Iterative
